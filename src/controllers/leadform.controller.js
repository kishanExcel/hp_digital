import { createLeadForm } from "../services/leadform.service.js";

export const createLeadFormController = async (req, res) => {
  const {
    access_token,
    page_id,
    name,
    questions,
    block_display_for_non_targeted_viewer,
    privacy_policy_url,
    follow_up_action_url
  } = req.body;

  if (!access_token || !page_id || !name || !questions || !Array.isArray(questions) || !privacy_policy_url || !follow_up_action_url) {
    return res.status(400).send({ success: false, message: "Invalid or missing parameters" });
  }

  const uniqueName = `${name}_${Date.now()}`;

  try {
    const leadFormId = await createLeadForm({
      access_token,
      page_id,
      name: uniqueName,
      questions,
      block_display_for_non_targeted_viewer,
      privacy_policy_url,
      follow_up_action_url
    });
    res.status(200).send({ success: true, id: leadFormId });
  } catch (error) {
   
    if (error.message.includes("Form Name already exists")) {
      return res.status(400).send({ success: false, message: "Form name already exists. Please enter a new one." });
    }
    res.status(500).send({ success: false, message: error.message });
  }
};
