import { createPost, getPosts } from "../services/posts.service.js";

export const createPostController = async (req, res) => {
  const { access_token, page_id, message, link, published, scheduled_publish_time } = req.body;

  if (!access_token) {
    return res.status(400).send({ success: false, message: "Access token is missing" });
  }

  if (!page_id) {
    return res.status(400).send({ success: false, message: "Page ID is missing" });
  }

  if (!message) {
    return res.status(400).send({ success: false, message: "Message is missing" });
  }

  let calculatedPublishTime = scheduled_publish_time;
  
  if (!published && scheduled_publish_time) {
    calculatedPublishTime = Math.floor(Date.now() / 1000) + scheduled_publish_time;
  }

  try {
    const post = await createPost({ 
      page_id, 
      message, 
      link, 
      published, 
      scheduled_publish_time: calculatedPublishTime, 
      access_token 
    });
    res.status(200).send({ success: true, data: post });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

export const getPostsController = async (req, res) => {
  const { access_token, page_id } = req.query;

  if (!access_token) {
    return res.status(400).send({ success: false, message: "Access token is missing" });
  }

  if (!page_id) {
    return res.status(400).send({ success: false, message: "Page ID is missing" });
  }

  try {
    const posts = await getPosts(page_id, access_token);
    res.status(200).send({ success: true, data: posts });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

