import Conversation from "../models/conversation-model.js";
import User from "../models/user-model.js";

export const createConversation = async (req, res) => {
    try {
        const { name, participants } = req.body;

        if (!name || !participants) {
            return res.status(400).json({ error: "Invalid data. Name and participants are required." });
        }

        const newConversation = await Conversation.create({
            name,
            participants,
        });

        // Save the conversation to the database
        await newConversation.save();

        res.status(201).json(newConversation);
    } catch (error) {
        console.log("Error in createConversation controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
