import { getComments } from "../services/comments.service.js";

export const getCommentsController = async (req, res) => {
  const { access_token, post_id } = req.query;

  if (!access_token) {
    return res.status(400).send({ success: false, message: "Access token is missing" });
  }

  if (!post_id) {
    return res.status(400).send({ success: false, message: "Post ID is missing" });
  }

  try {
    const comments = await getComments(post_id, access_token);
    res.status(200).send({ success: true, data: comments });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
