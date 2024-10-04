import express from "express";
import { sendMessage, getMessages } from "../controllers/message-controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/send/:conversationId", protectRoute, sendMessage);
router.get("/:conversationId", protectRoute, getMessages);

export default router;