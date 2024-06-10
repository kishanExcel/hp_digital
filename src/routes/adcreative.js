import express from 'express';
import { createAdCreativeController } from '../controllers/adcreative.controller.js';

const adCreativeRouter = express.Router();

adCreativeRouter.post('/adcreative', createAdCreativeController);

export default adCreativeRouter;
