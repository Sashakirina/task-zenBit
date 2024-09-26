import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';

import authRouter from './router/auth.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

const PORT = process.env.PORT || 3000;

export const setupServer = () => {
  dotenv.config();

  const app = express();

  app.use(bodyParser.json());

  app.use('/auth', authRouter);

  app.use(errorHandler);

  app.use('*', notFoundHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
