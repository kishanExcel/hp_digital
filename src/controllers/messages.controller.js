import { fetchMessages, replyMessage } from "../services/message.service.js";


export const getMessages =async(req, res) => {
   const token = req.headers.authorization?.split(" ")[1];
   const conversationId = req.query.conversationId;
   try {
      const messages = await fetchMessages(token, conversationId)
      res.status(200).send({success:true, messages})
   } catch (error) {
      console.log(error)
      res.status(500).send({success:false, message:error.message})
   }
}


export const sendMessage =async(req, res) => {
   const token = req.headers.authorization?.split(" ")[1];
   const pageId = req.query.pageId;
   const data = req.body;
   try {
      const message = await replyMessage(token, pageId, data)
      res.status(200).send({success:true, data:message, message:"Reply send successfully"})
   } catch (error) {
      console.log(error, "MMMMMMMMM")
      res.status(500).send({success:false, message:error.message})
   }
}