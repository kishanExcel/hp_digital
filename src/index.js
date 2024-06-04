import express from "express";
import pageRouter from "./routes/pages.js";
import conversationRouter from "./routes/conversation.js";
import messageRouter from "./routes/messages.js";
import webhookRouter from "./routes/webhook.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT || 3005;

app.use(express.json());

app.get("/", (_, res) => {
  res.send("Facebook Messenger API Example");
});

app.use("/api/v1", pageRouter);
app.use("/api/v1", conversationRouter);
app.use("/api/v1", messageRouter);
app.use("/api/v1", webhookRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
