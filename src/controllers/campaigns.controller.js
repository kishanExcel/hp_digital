import { createCampaign, fetchCampaigns } from "../services/campaigns.service.js";

export const createAdCampaign = async (req, res) => {
  const access_token = req.headers.authorization?.split(" ")[1];
  const {ad_account_id, buying_type, name, objective, status, special_ad_categories } = req.body;

  if (!ad_account_id) {
    return res.status(400).send({ success: false, message: "Ad account ID is missing" });
  }

  try {
    const campaignId = await createCampaign({ access_token, ad_account_id, buying_type, name, objective, status, special_ad_categories });
    res.status(200).send({ success: true, id: campaignId });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};


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
