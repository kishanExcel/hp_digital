import express from 'express';
import { createAdSetController } from '../controllers/adset.controller.js';

const adsetRouter = express.Router();

adsetRouter.post('/adset', createAdSetController);

export default adsetRouter;
