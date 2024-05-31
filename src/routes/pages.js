import express from 'express';
import { getPages } from '../controllers/pages.controller.js';


const pageRouter = express.Router();


pageRouter.get('/pages' , getPages);


export default pageRouter;