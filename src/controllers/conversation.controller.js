import { fetchConversation } from "../services/coversation.service.js";


export const getConversation =async(req, res) => {
   const token = req.headers.authorization?.split(" ")[1];
   const pageId = req.query.pageId;
   try {
      const coversations = await fetchConversation(token, pageId)
      res.status(200).send({success:true, coversations})
   } catch (error) {
      res.status(500).send({success:false, message:error.message})
   }
}