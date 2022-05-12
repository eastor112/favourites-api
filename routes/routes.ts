import { Application } from 'express';
import users from '../api/users';

const routes = (app:Application) => {
  app.use('/api/users', users);
};

export default routes;
