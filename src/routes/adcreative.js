import express from 'express';
import { createAdCreativeController } from '../controllers/adcreative.controller.js';

const adcreativeRouter = express.Router();

adcreativeRouter.post('/adcreative', createAdCreativeController);

export default adcreativeRouter;
