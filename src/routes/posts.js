import express from "express";
import { createPostController, getPostsController } from "../controllers/posts.controller.js";
  

const router = express.Router();

router.post("/posts", createPostController);
router.get("/posts", getPostsController);

export default router;
