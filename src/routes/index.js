import express from 'express';

// eslint-disable-next-line new-cap
const indexRouter = express.Router();

indexRouter.get('/', (req, res) =>
  res.status(200).json({message: 'Welcome to Express API template'}),
);

export default indexRouter;
