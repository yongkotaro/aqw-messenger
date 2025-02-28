import Lobby from "../models/lobby-model.js";

export const createLobby = async (req, res) => {
    try {
        const { name, size } = req.body;
        const participants = [req.user];

        if (!name || !size) {
            return res.status(400).json({ error: "Invalid data. Name and participants are required." });
        }

        if (size < 2) {
            return res.status(400).json({ error: "Invalid data. Size must be at least 2." });
        }

        const newLobby = await Lobby.create({
            name,
            size: size,
            participants,
        });

        // Save the conversation to the database
        await newLobby.save();

        res.status(201).json(newLobby);
    } catch (error) {
        console.log("Error in createConversation controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getLobbies = async (req, res) => {
    try {
        // Find all lobbies
        const lobbies = await Lobby.find();

        if (lobbies.length === 0) {
            return res.status(404).json({ error: "No lobbies found." });
        }

        res.status(200).json(lobbies);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

export const joinLobby = async (req, res) => {
    try {
        const { lobbyId } = req.params; // Get the lobbyId from request params
        const userId = req.user._id; // Assuming the user is authenticated and we have their ID

        // Find the lobby by ID
        const lobby = await Lobby.findById(lobbyId);

        if (!lobby) {
            return res.status(404).json({ error: "Lobby not found." });
        }

        // Check if the user is already in the lobby
        if (lobby.participants.includes(userId)) {
            return res.status(400).json({ error: "You are already in this lobby." });
        }

        // Check if there's space in the lobby
        if (lobby.participants.length >= lobby.size) {
            return res.status(400).json({ error: "Lobby is full." });
        }

        // Add the user to the participants array
        lobby.participants.push(userId);

        // Save the updated lobby
        await lobby.save();

        res.status(200).json(lobby);
    } catch (error) {
        console.log("Error in joinLobby controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};