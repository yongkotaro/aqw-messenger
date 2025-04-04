import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';

import authRoutes from './routes/auth-routes.js';
import messageRoutes from './routes/message-routes.js';
import userRoutes from './routes/user-routes.js';
import conversationRoutes from './routes/conversation-routes.js';
import lobbyRoutes from './routes/lobby-routes.js';

import connectToMongoDB from './db/connect-to-MongoDB.js';
import { app, server } from './socket/socket.js';

dotenv.config();

const __dirname = path.resolve();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes)
app.use("/api/conversations", conversationRoutes)
app.use("/api/lobbies", lobbyRoutes)

// app.use(express.static(path.join(__dirname, "/frontend/dist")));

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });
// health check
app.get("/", (_, res) => {
    return res.status(200).json({
        status: "healthy",
    });
});


server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
});



