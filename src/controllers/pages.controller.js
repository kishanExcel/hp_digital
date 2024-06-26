import { fetchPages } from "../services/pages.service.js";

export const getPages =async(req, res) => {
   const token = req.headers.authorization?.split(" ")[1];
   try {
      const pages = await fetchPages(token)
      res.status(200).send({success:true, data:pages})
   } catch (error) {
      res.status(500).send({success:false, message:error.message})
   }
}