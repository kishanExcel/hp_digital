import express from "express";
import { getCommentsController } from "../controllers/comments.controller.js";

const router = express.Router();

router.get("/comments", getCommentsController);

export default router;
