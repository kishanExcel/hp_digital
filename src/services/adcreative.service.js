// import axios from "axios";

// const adcreativeBaseUrl = "https://graph.facebook.com/v20.0/";

// export const createAdCreative = async ({
//   access_token,
//   ad_account_id,
//   name,
//   object_story_spec,
//   privacy_url,
//   standard_enhancements
// }) => {
//   try {
//     const response = await axios.post(
//       `${adcreativeBaseUrl}act_${ad_account_id}/adcreatives`,
//       {
//         access_token,
//         name,
//         object_story_spec,
//         privacy_url,
//         standard_enhancements: {
//           enroll_status: "OPT_IN"
//         }
//       },
//       {
//         headers: { 'Content-Type': 'application/json' }
//       }
//     );

//     if (response.data && response.data.id) {
//       return response.data.id;
//     } else {
//       throw new Error('Failed to create ad creative');
//     }
//   } catch (error) {
//     if (error.response) {
//       console.error('Error data:', error.response.data);
//       throw new Error(`Request failed with status code ${error.response.status}: ${JSON.stringify(error.response.data)}`);
//     } else {
//       throw new Error(error.message);
//     }
//   }
// };

import axios from "axios";

const adcreativeBaseUrl = "https://graph.facebook.com/v20.0/";

export const createAdCreative = async ({
  access_token,
  ad_account_id,
  name,
  object_story_spec,
  privacy_url,
  standard_enhancements
}) => {
  try {
    console.log('Creating Ad Creative with:', {
      access_token,
      ad_account_id,
      name,
      object_story_spec,
      privacy_url,
      standard_enhancements
    }); // Debugging line

    const response = await axios.post(
      `${adcreativeBaseUrl}act_${ad_account_id}/adcreatives`,
      {
        access_token,
        name,
        object_story_spec,
        privacy_url,
        standard_enhancements: {
          enroll_status: "OPT_IN"
        }
      },
      {
        headers: { 'Content-Type': 'application/json' }
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

