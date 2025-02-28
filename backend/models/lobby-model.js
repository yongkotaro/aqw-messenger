import mongoose from "mongoose";

const lobbySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        size: {
            type: Number,
            required: true,
        },
        participants: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
);

const Lobby = mongoose.model("Lobby", lobbySchema);

export default Lobby;