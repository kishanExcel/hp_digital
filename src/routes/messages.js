import express from 'express';
import { getMessages } from '../controllers/messages.controller.js';


const messageRouter = express.Router();


messageRouter.get('/messages' , getMessages);


export default messageRouter;