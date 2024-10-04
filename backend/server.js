import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth-routes.js';
import connectToMongoDB from './db/connect-to-MongoDB.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the server")
});

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
});

