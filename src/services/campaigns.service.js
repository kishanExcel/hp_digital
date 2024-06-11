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

export const fetchCampaigns = async (token, ad_account_id) => {
  const options = {
    params: {
      fields:"name,id",
      access_token:token,
    },
  };

  const response = await axios.get(
    `${campaignBaseUrl}act_${ad_account_id}/campaigns`,
    options
  );
  const compaigns = response?.data;
  return compaigns;
};
