import { createAdSet } from "../services/adset.service.js";

export const createAdSetController = async (req, res) => {
  const {
    access_token,
    ad_account_id,
    bid_amount,
    billing_event,
    campaign_id,
    daily_budget,
    destination_type,
    name,
    optimization_goal,
    promoted_object,
    status,
    targeting
  } = req.body;

  if (!access_token) {
    return res.status(400).send({ success: false, message: "Access token is missing" });
  }

  if (!ad_account_id) {
    return res.status(400).send({ success: false, message: "Ad account ID is missing" });
  }

  try {
    const adSetId = await createAdSet({
      access_token,
      ad_account_id,
      bid_amount,
      billing_event,
      campaign_id,
      daily_budget,
      destination_type,
      name,
      optimization_goal: "REACH",
      promoted_object,
      status,
      targeting
    });
    res.status(200).send({ success: true, id: adSetId });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
