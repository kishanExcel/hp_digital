import handleMessage from "../services/webhook.service.js";
const webhookData = (req, res) => {
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

export default webhookData;
