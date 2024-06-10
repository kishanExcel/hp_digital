import axios from "axios";
const BaseUrl = "https://graph.facebook.com/v20.0/";

export const fetchCampaigns = async (token, ad_account_id) => {
  const options = {
    params: {
      fields:"name,id",
      access_token:token,
    },
  };

  const response = await axios.get(
    `${BaseUrl}act_${ad_account_id}/campaigns`,
    options
  );
  const compaigns = response?.data;
  return compaigns;
};

export const fetchInsights =async(token, adId) => {
    const options = {
      params: {
        fields:"impressions,clicks,spend",
        access_token:token,
      },
    };
  
    const response = await axios.get(
      `${BaseUrl}${adId}/insights`,
      options
    );
    const compaigns = response?.data;
    return compaigns;
}
