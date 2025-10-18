# Live Chat App



A real-time chat application built with Node.js, Express, and Socket.io that allows multiple users to chat simultaneously.

## Features

- **Real-time messaging**: Instant message delivery using WebSockets
- **User management**: Join/leave notifications
- **Typing indicators**: See when someone is typing
- **Modern UI**: Beautiful, responsive design with gradient backgrounds
- **Multiple users**: Support for multiple concurrent users
- **Username system**: Each user can set their own username

## Technologies Used

- **Backend**: Node.js, Express.js
- **Real-time Communication**: Socket.io
- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Modern CSS with gradients and animations

## Installation

1. Clone the repository:
```bash
git clone https://github.com/BHOOMI764/Live-chat-App.git
cd Live-chat-App
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Enter your username when prompted
2. Start chatting with other users
3. See real-time messages and typing indicators
4. Users will be notified when someone joins or leaves

## Project Structure

```
Live-chat-App/
├── index.js              # Express server with Socket.io
├── package.json           # Dependencies and scripts
├── public/
│   └── index.html         # Frontend chat interface
└── README.md             # Project documentation
```

## API Endpoints

- `GET /` - Serves the main chat interface
- WebSocket events:
  - `user-joined` - When a user joins the chat
  - `chat-message` - Sending/receiving messages
  - `typing` - Typing indicators
  - `user-left` - When a user leaves

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Created by [BHOOMI764](https://github.com/BHOOMI764)

---

**Live Chat App** - Connect and chat with people in real-time! 🚀
