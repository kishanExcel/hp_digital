import express from 'express';
import { getMessages } from '../controllers/messages.controller.js';
import { sendMessage } from '../controllers/messages.controller.js';


const messageRouter = express.Router();


messageRouter.post('/message/reply' , sendMessage);
messageRouter.get('/messages' , getMessages);


export default messageRouter;