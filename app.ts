import dotenv from 'dotenv';
import express, { Application } from 'express';

import configExpress from './config/express';
import connectDB from './config/database';
import routes from './routes/routes';

dotenv.config();

const app: Application = express();

const env = process.env.NODE_ENV;

if (env !== 'test') {
  connectDB();
}

configExpress(app);
routes(app);

export default app;
