import express from 'express';
import { aboutPage, indexPage } from '../controllers';
import {testEnvironmentVariable} from '../settings';

// eslint-disable-next-line new-cap
const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/about', aboutPage);

export default indexRouter;
