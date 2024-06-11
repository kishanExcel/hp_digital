import express from 'express';
import {getInsights } from '../controllers/insights.controller.js';


const insightsRouter = express.Router();

insightsRouter.get('/insights' , getInsights);


export default insightsRouter;