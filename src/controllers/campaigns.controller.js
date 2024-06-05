import { createCampaign } from "../services/campaigns.service.js";

export const createAdCampaign = async (req, res) => {
  const { access_token, ad_account_id, buying_type, name, objective, status, special_ad_categories } = req.body;

  if (!access_token) {
    return res.status(400).send({ success: false, message: "Access token is missing" });
  }

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
