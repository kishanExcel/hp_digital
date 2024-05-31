import { fetchMessages } from "../services/message.service.js";

export const getMessages =async(req, res) => {
   const token = req.headers.authorization?.split(" ")[1];
   const conversationId = req.query.conversationId;

   if(!token) res.status(400).send({success:true, message:"Access token is missing"});
   try {
      const messages = await fetchMessages(token, conversationId)
      res.status(200).send({success:true, messages})
   } catch (error) {
      console.log(error)
      res.status(500).send({success:false, message:error.message})
   }
}