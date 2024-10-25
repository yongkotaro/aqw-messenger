import Conversation from "../models/conversation-model.js";
import Message from "../models/message-model.js";
import { io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { conversationId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findById(conversationId);

        if (!conversation) {
            res.status(404).json({ error: "Conversation does not exist" });
        }

        if (!conversation.participants.includes(senderId)) {
            return res.status(403).json({ error: "You are not a participant in this conversation" });
        }

        const newMessage = new Message({
            senderId,
            message
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(), newMessage.save()]);

        io.to(conversation._id).emit("message received", newMessage);
        console.log("Message sent" + conversation._id);

        res.status(200).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getMessages = async (req, res) => {
    try {
        const { conversationId } = req.params;
        const currUserId = req.user._id;

        const conversation = await Conversation.findById(conversationId).populate("messages");

        if (!conversation) {
            return res.status(404).json({ error: "Conversation does not exist" });
        }

        if (!conversation.participants.includes(currUserId)) {
            return res.status(403).json({ error: "You are not a participant in this conversation" });
        }

        const messages = conversation.messages;

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessages controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
