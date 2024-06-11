import { fetchInsights, getPageInsights } from "../services/insights.service.js";

export const getInsights = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  const { ad_id } = req.query;

  if (!token) {
    return res.status(400).send({ success: false, message: "Authorization token is missing" });
  }

  if (!ad_id) {
    return res.status(400).send({ success: false, message: "Ad ID is missing" });
  }

  try {
    const insights = await fetchInsights(token, ad_id);
    res.status(200).send({ success: true, insights });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

export const getPageInsightsController = async (req, res) => {
  const { access_token, page_id, metrics, since, until } = req.body;

  if (!access_token) {
    return res.status(400).send({ success: false, message: "Access token is missing" });
  }

  if (!page_id) {
    return res.status(400).send({ success: false, message: "Page ID is missing" });
  }

  if (!metrics) {
    return res.status(400).send({ success: false, message: "Metrics are missing" });
  }

  try {
    const insights = await getPageInsights({ access_token, page_id, metrics, since, until });
    res.status(200).send({ success: true, data: insights });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
