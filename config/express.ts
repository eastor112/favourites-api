import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

function configExpress(app: Application): void {
  app.use(cors());
  app.use(express.json());
  app.use(morgan('dev'));
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');

    next();
  });
}

export default configExpress;
