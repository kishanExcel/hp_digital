import axios from "axios";

// const adCreativeBaseUrl = "https://graph.facebook.com/LATEST-API-VERSION/";
const adCreativeBaseUrl = "https://graph.facebook.com/v20.0/";

export const createAdCreative = async ({
  access_token,
  ad_account_id,
  description,
  image_hash,
  message,
  page_id,
  form_id
}) => {
  try {
    const response = await axios.post(
      `${adCreativeBaseUrl}act_${ad_account_id}/adcreatives`,
      {
        access_token,
        object_story_spec: {
          link_data: {
            call_to_action: {
              type: "SIGN_UP",
              value: {
                lead_gen_form_id: form_id
              }
            },
            description,
            image_hash,
            link: "https://fb.me/",
            message
          },
          page_id
        }
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );

    if (response.data && response.data.id) {
      return response.data.id;
    } else {
      throw new Error('Failed to create ad creative');
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
