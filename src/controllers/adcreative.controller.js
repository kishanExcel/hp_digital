// import { createAdCreative } from "../services/adcreative.service.js";

// export const createAdCreativeController = async (req, res) => {
//   const {
//     access_token,
//     ad_account_id,
//     name,
//     object_story_spec,
//     privacy_url,
//     standard_enhancements
//   } = req.body;

//   if (!access_token) {
//     return res.status(400).send({ success: false, message: "Access token is missing" });
//   }

//   if (!ad_account_id) {
//     return res.status(400).send({ success: false, message: "Ad account ID is missing" });
//   }

//   try {
//     const adCreativeId = await createAdCreative({
//       access_token,
//       ad_account_id,
//       name,
//       object_story_spec,
//       privacy_url,
//       standard_enhancements
//     });
//     res.status(200).send({ success: true, id: adCreativeId });
//   } catch (error) {
//     res.status(500).send({ success: false, message: error.message });
//   }
// };

import { createAdCreative } from "../services/adcreative.service.js";

export const createAdCreativeController = async (req, res) => {
  const {
    access_token,
    ad_account_id,
    name,
    object_story_spec,
    privacy_url,
    standard_enhancements
  } = req.body;

  console.log('Request body:', req.body); // Debugging line

  if (!access_token) {
    return res.status(400).send({ success: false, message: "Access token is missing" });
  }

  if (!ad_account_id) {
    return res.status(400).send({ success: false, message: "Ad account ID is missing" });
  }

  try {
    const adCreativeId = await createAdCreative({
      access_token,
      ad_account_id,
      name,
      object_story_spec,
      privacy_url,
      standard_enhancements
    });
    res.status(200).send({ success: true, id: adCreativeId });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
