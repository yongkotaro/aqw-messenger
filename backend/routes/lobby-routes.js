import express from "express";
import { createLobby, getLobbies, joinLobby } from "../controllers/lobby-controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/", protectRoute, createLobby);
router.get("/", protectRoute, getLobbies);
router.post("/join/:lobbyId", protectRoute, joinLobby);

export default router;