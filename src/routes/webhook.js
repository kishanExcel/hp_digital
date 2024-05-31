import express from "express";
import webhookData from "../controllers/webhook.controller.js";

const webhookRouter = express.Router();

webhookRouter.post("/webhook", webhookData);

export default webhookRouter;
