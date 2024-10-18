import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth-routes.js';
import messageRoutes from './routes/message-routes.js';
import userRoutes from './routes/user-routes.js';
import conversationRoutes from './routes/conversation-routes.js';

import connectToMongoDB from './db/connect-to-MongoDB.js';


const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes)
app.use("/api/conversations", conversationRoutes)

app.get("/", (req, res) => {
    res.send("Welcome to the server")
});

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
});

