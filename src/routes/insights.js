import express from 'express';
import { getCampaigns, getInsights } from '../controllers/insights.controller.js';


const insightsRouter = express.Router();


insightsRouter.get('/campaigns' , getCampaigns);
insightsRouter.get('/insights' , getInsights);


export default insightsRouter;