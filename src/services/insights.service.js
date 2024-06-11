import axios from "axios";
const BaseUrl = "https://graph.facebook.com/v20.0/";

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
