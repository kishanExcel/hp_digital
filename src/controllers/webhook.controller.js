import handleMessage from "../services/webhook.service.js";
import dotenv from "dotenv";
dotenv.config();
export const webhookData = (req, res) => {
  const body = req.body;

  if (body.object === "page") {
    body.entry.forEach((entry) => {
      const webhookEvent = entry.messaging[0];
      console.log(webhookEvent);

      const senderId = webhookEvent.sender.id;
      const message = webhookEvent.message;

      if (message && message.text) {
        handleMessage(senderId, message.text);
      }
    });

    res.status(200).send("EVENT_RECEIVED");
  } else {
    res.sendStatus(404);
  }
};
const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

export const webhookGet = (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode && token === VERIFY_TOKEN) {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
};
