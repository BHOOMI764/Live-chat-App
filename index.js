import { Server } from 'socket.io';
import express from 'express';  
import { createServer } from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);
const io = new Server(server);
const port = process.env.PORT || 3000;

// Serve the HTML file
app.use(express.static(__dirname)); // Serve static files like index.html

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Socket.IO connection
io.on("connection", (socket) => {
  console.log("A user connected");

  // Track connection time
  const connectionStartTime = Date.now();

  socket.on("user_join", (data) => {
    socket.username = data;
    socket.connectionStartTime = connectionStartTime;
    socket.broadcast.emit("user_join", data);
  });

  socket.on("chat_message", (data) => {
    const timestamp = new Date().toLocaleTimeString();
    data.username = socket.username;
    data.timestamp = timestamp;
    io.emit("chat_message", data);
  });

  socket.on("disconnect", () => {
    const connectionEndTime = Date.now();
    const totalTimeConnected = Math.floor((connectionEndTime - socket.connectionStartTime) / 1000); // Time in seconds
    
    console.log(`User disconnected: ${socket.username}, Connected for ${totalTimeConnected} seconds`);
    socket.broadcast.emit("user_leave", socket.username);
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
