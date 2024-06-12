import axios from "axios";

const BASE_URL = "https://graph.facebook.com/v20.0/";

export const getComments = async (post_id, access_token) => {
  try {
    const response = await axios.get(
      `${BASE_URL}${post_id}/comments`,
      {
        params: {
          fields: "from,message",
          access_token
        }
      }
    );
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
