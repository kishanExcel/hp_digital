import express from 'express';
import { createAdCampaign, getCampaigns } from '../controllers/campaigns.controller.js';

const campaignRouter = express.Router();

campaignRouter.post('/campaign', createAdCampaign);
campaignRouter.get('/campaigns', getCampaigns)

export default campaignRouter;


