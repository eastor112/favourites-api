/* eslint-disable import/first */
import * as dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/.env` });

import express, { Application } from 'express';
import configExpress from './config/express';
import connectDB from './config/database';
import routes from './routes/routes';

const app: Application = express();

const env = process.env.NODE_ENV;

if (env !== 'test') {
  connectDB();
}

configExpress(app);
routes(app);

export default app;
