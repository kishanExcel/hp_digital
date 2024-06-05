import express from 'express';
import { createAdCampaign } from '../controllers/campaigns.controller.js';

const campaignRouter = express.Router();

campaignRouter.post('/campaign', createAdCampaign);

export default campaignRouter;


