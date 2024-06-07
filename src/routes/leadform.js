import express from 'express';
import { createLeadFormController } from '../controllers/leadform.controller.js';

const leadformRouter = express.Router();

leadformRouter.post('/leadform', createLeadFormController);

export default leadformRouter;
