import axios from "axios";

const BASE_URL = "https://graph.facebook.com/v20.0/";

export const createPost = async ({ page_id, message, link, published, scheduled_publish_time, access_token }) => {
  try {
    const response = await axios.post(
      `${BASE_URL}${page_id}/feed`,
      { message, link, published, scheduled_publish_time },
      { params: { access_token } }
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

export const getPosts = async (page_id, access_token) => {
  try {
    const response = await axios.get(
      `${BASE_URL}${page_id}/feed`,
      { params: { access_token } }
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

