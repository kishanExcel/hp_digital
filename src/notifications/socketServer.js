import { Server } from "socket.io";
let io = null;

export const socketServerSetup = (httpServer) => {
    io = new Server(httpServer)
    io.on("connection", (socket) => {
    const conversationId = socket.handshake.query.conversationId;

    if (conversationId) {
      socket.join(conversationId);
      console.log(`User connected to conversation room: ${conversationId}`);
    }

    io.on("disconnect", () => {
      console.log("User disconnected");
    });

    io.on("chat_message", (msg) => {
      console.log("Message: " + msg);
      io.emit("chat message", msg);
    });
    });
};

export const sendNotification = (roomId, data) => {
    if (io) {
        io.to(roomId).emit('chat_messages', data);
      } else {
        console.log('No current socket connection to send notification');
      }
};
