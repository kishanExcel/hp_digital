import { createLeadForm } from "../services/leadform.service.js";

export const createLeadFormController = async (req, res) => {
  const {
    access_token,
    page_id,
    name,
    questions,
    block_display_for_non_targeted_viewer
  } = req.body;

  if (!access_token || !page_id || !name || !questions || !Array.isArray(questions)) {
    return res.status(400).send({ success: false, message: "Invalid or missing parameters" });
  }

  try {
    const leadFormId = await createLeadForm({
      access_token,
      page_id,
      name,
      questions,
      block_display_for_non_targeted_viewer
    });
    res.status(200).send({ success: true, id: leadFormId });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
