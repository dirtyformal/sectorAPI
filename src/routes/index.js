import express from 'express';
import {testEnvironmentVariable} from '../settings';

// eslint-disable-next-line new-cap
const indexRouter = express.Router();

indexRouter.get('/', (req, res) =>
  res.status(200).json({message: testEnvironmentVariable}),
);

export default indexRouter;
