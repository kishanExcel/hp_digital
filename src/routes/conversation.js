import express from 'express';
import { getConversation } from '../controllers/conversation.controller.js';


const conversationRouter = express.Router();


conversationRouter.get('/coversation' , getConversation);


export default conversationRouter;