import { Application } from 'express';
import users from '../api/users';
import favs from '../api/favourites';
import auth from '../auth';

const routes = (app:Application) => {
  app.use('/api/users', users);
  app.use('/api/favs', favs);
  app.use('/auth/local/', auth);
};

export default routes;
