import axios from "axios";

const campaignBaseUrl = "https://graph.facebook.com/v20.0/";

export const createCampaign = async ({ access_token, ad_account_id, buying_type, name, objective, status, special_ad_categories }) => {
  const response = await axios.post(
    `${campaignBaseUrl}act_${ad_account_id}/campaigns`,
    {
      access_token,
      buying_type,
      name,
      objective,
      status,
      special_ad_categories,
    },
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );

  if (response.data && response.data.id) {
    return response.data.id;
  } else {
    throw new Error('Failed to create campaign');
  }
};
