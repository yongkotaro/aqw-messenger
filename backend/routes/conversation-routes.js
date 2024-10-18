import express from "express";
import { createConversation } from "../controllers/conversation-controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/", protectRoute, createConversation);

export default router;