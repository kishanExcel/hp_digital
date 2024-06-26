import express from 'express';
import {getInsights } from '../controllers/insights.controller.js';
import { getPageInsightsController } from '../controllers/insights.controller.js';

const insightsRouter = express.Router();

insightsRouter.get('/insights' , getInsights);
insightsRouter.post('/insights', getPageInsightsController);

export default insightsRouter;

