import axios from "axios";

const leadFormBaseUrl = "https://graph.facebook.com/v20.0/";

export const createLeadForm = async ({
  access_token,
  page_id,
  name,
  questions,
  block_display_for_non_targeted_viewer,
  privacy_policy_url,
  follow_up_action_url
}) => {
  try {
    const payload = {
      access_token,
      name,
      questions,
      block_display_for_non_targeted_viewer,
      privacy_policy: { url: privacy_policy_url },
      follow_up_action_url
    };

    console.log("Request Payload:", JSON.stringify(payload, null, 2)); 

    const response = await axios.post(
      `${leadFormBaseUrl}${page_id}/leadgen_forms`,
      payload,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );

    if (response.data && response.data.id) {
      return response.data.id;
    } else {
      throw new Error('Failed to create lead form');
    }
  } catch (error) {
    if (error.response) {
      console.error('Error data:', error.response.data);
      throw new Error(`Request failed with status code ${error.response.status}: ${JSON.stringify(error.response.data)}`);
    } else {
      throw new Error(error.message);
    }
  }
};
