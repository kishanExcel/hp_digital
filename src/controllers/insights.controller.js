import { fetchCampaigns, fetchInsights } from "../services/insights.service.js";

export const getCampaigns =async(req, res) => {
   const token = req.headers.authorization?.split(" ")[1];
   const {ad_account_id} = req.query;
   try {
      const campaigns = await fetchCampaigns(token, ad_account_id)
      res.status(200).send({success:true, campaigns})
   } catch (error) {
      res.status(500).send({success:false, message:error.message})
   }
}

export const getInsights =async(req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    const {ad_id} = req.query;
    try {
       const insights = await fetchInsights(token, ad_id)
       res.status(200).send({success:true, insights})
    } catch (error) {
       res.status(500).send({success:false, message:error.message})
    }
 }