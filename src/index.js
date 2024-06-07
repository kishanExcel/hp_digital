import express from "express";
import pageRouter from "./routes/pages.js";
import conversationRouter from "./routes/conversation.js";
import messageRouter from "./routes/messages.js";
import webhookRouter from "./routes/webhook.js";
import campaignRouter from "./routes/campaigns.js";
import cors from 'cors'
import adsetRouter from "./routes/adset.js";
import leadformRouter from "./routes/leadform.js";

import dotenv from "dotenv";
import { isTokenExist } from "./middlewares/isTokenExist.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 3005;

app.use(express.json());
app.use(cors({origin:"*"}))
app.use('/', isTokenExist)


app.use("/api/v1", pageRouter);
app.use("/api/v1", conversationRouter);
app.use("/api/v1", messageRouter);
app.use("/api/v1", webhookRouter);
app.use("/api/v1", campaignRouter);
app.use("/api/v1", adsetRouter);
app.use("/api/v1", leadformRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
