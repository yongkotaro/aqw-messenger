import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    console.log("a user connected", socket.id);

    socket.on("join conversation", (conversation) => {
        socket.join(conversation._id);
        console.log("User Joined Conversation: " + conversation._id);
    });

    // socket.on() is used to listen to the events. can be used both on client and server side
    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
    });
});

export { app, io, server };