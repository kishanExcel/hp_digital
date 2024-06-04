import express from "express";
import {webhookData, webhookGet} from "../controllers/webhook.controller.js";

const webhookRouter = express.Router();

webhookRouter.post("/webhook", webhookData);
webhookRouter.get("/webhook", webhookGet);

export default webhookRouter;
