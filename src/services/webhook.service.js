import request from "request";
import dotenv from "dotenv";
dotenv.config();
function handleMessage(senderId, receivedMessage) {
  const response = {
    text: `You sent the message: "${receivedMessage}". Now send me an image!`,
  };

  callSendAPI(senderId, response);
}

function callSendAPI(senderId, response) {
  const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

  const requestBody = {
    recipient: {
      id: senderId,
    },
    message: response,
  };

  request(
    {
      uri: "https://graph.facebook.com/v11.0/me/messages",
      qs: { access_token: PAGE_ACCESS_TOKEN },
      method: "POST",
      json: requestBody,
    },
    (err, res, body) => {
      if (!err) {
        console.log("message sent!");
      } else {
        console.error("Unable to send message:" + err);
      }
    }
  );
}

export default handleMessage;
