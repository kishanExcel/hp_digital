import axios from "axios";

const adsetBaseUrl = "https://graph.facebook.com/v20.0/";

export const createAdSet = async ({
  access_token,
  ad_account_id,
  bid_amount,
  billing_event,
  campaign_id,
  daily_budget,
  destination_type,
  name,
  optimization_goal,
  promoted_object,
  status,
  targeting
}) => {
  try {
    const response = await axios.post(
      `${adsetBaseUrl}act_${ad_account_id}/adsets`,
      {
        access_token,
        bid_amount,
        billing_event,
        campaign_id,
        daily_budget,
        destination_type,
        name,
        optimization_goal: "REACH",
        promoted_object,
        status,
        targeting
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );

    if (response.data && response.data.id) {
      return response.data.id;
    } else {
      throw new Error('Failed to create ad set');
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
