import handleMessage from "../services/webhook.service.js";
import dotenv from "dotenv";
import { sendNotification } from "../notifications/socketServer.js";
dotenv.config();

export const webhookData = (req, res) => {
  const body = req.body;
  console.log( body,'working....')
  
  if (body.object === "page") {
    body.entry.forEach((entry) => {
      const webhookEvent = entry.messaging[0];
      const senderId = webhookEvent.sender.id;
      const recipientId = webhookEvent.recipient.id;
      // const message = webhookEvent.message.text;
      sendNotification(recipientId, webhookEvent)
      // if (message && message.text) {
      //   // handleMessage(senderId, message.text);
      // }
    });

    res.status(200).send("EVENT_RECEIVED");
  } else {
    res.sendStatus(404);
  }
};
const VERIFY_TOKEN ="qwiubdjabdsajkdsdsadasdsaid9032eo3";


export const webhookGet = (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  console.log(challenge, "webhook verified")


  if (mode && token === VERIFY_TOKEN) {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(404);
  }
};
