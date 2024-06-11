import {fetchInsights } from "../services/insights.service.js";

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