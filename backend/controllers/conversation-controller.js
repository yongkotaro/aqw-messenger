import Conversation from "../models/conversation-model.js";
import mongoose from "mongoose";

export const createConversation = async (req, res) => {
    try {
        const { name, participants } = req.body;

        if (!name || !participants) {
            return res.status(400).json({ error: "Invalid data. Name and participants are required." });
        }

        for (const id of participants) {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ error: `User does not exist` });
            }
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

export const getConversations = async (req, res) => {
    try {
        const userId = req.user._id;

        // Find conversations where the user is a participant
        const conversations = await Conversation.find({
            participants: userId,
        });

        // if (conversations.length === 0) {
        //     return res.status(404).json({ error: "No conversations found for this user." });
        // }

        res.status(200).json(conversations);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};
