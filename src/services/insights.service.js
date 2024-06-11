import axios from "axios";

const BaseUrl = "https://graph.facebook.com/v20.0/";

export const fetchInsights = async (token, adId) => {
  try {
    const options = {
      params: {
        fields: "impressions,clicks,spend",
        access_token: token,
      },
    };

    const response = await axios.get(`${BaseUrl}${adId}/insights`, options);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error data:', error.response.data);
      throw new Error(`Request failed with status code ${error.response.status}: ${JSON.stringify(error.response.data)}`);
    } else {
      throw new Error(error.message);
    }
  }
};

export const getPageInsights = async ({ access_token, page_id, metrics, since, until }) => {
  try {
    const options = {
      params: {
        metric: metrics.join(','),
        access_token,
        since,
        until,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.get(`${BaseUrl}${page_id}/insights`, options);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error data:', error.response.data);
      throw new Error(`Request failed with status code ${error.response.status}: ${JSON.stringify(error.response.data)}`);
    } else {
      throw new Error(error.message);
    }
  }
};

