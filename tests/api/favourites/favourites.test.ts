import supertest from 'supertest';
import { connection } from 'mongoose';

import app from '../../../app';
import connectDB from '../../../config/database';
import Users from '../../../api/users/users.model';
import Favourites from '../../../api/favourites/favourites.model';
import {
  initialUsers,
  initialFavourites,
  initialFavouritesItems,
} from '../../testHelpers/initialData';

const request = supertest(app);

let token:string = '';
let userId:string = '';
let favouriteId:string = '';

describe('Users enpoints tests', () => {
  beforeAll(async () => {
    await connectDB();
    await request.post('/api/users').send(initialUsers[0]);

    const response = await request
      .post('/auth/local/login')
      .send({
        email: initialUsers[0].email,
        password: initialUsers[0].password,
      });

    token = response.body.token;
    userId = response.body.user._id;
  });

  afterAll(async () => {
    await Favourites.deleteMany();
    await Users.deleteMany();
    await connection.close();
  });

  test('should create 3 Favourites list', async () => {
    const favouritesPromises = initialFavourites.map((favourite) => (
      request.post('/api/favs')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: favourite.name,
          userId,
        })));

    const responses = await Promise.all(favouritesPromises);

    favouriteId = responses[0].body._id;

    const response = await request
      .get('/api/favs')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(initialFavourites.length);
  });

  test('should get Favourite list by id', async () => {
    const response = await request
      .get(`/api/favs/${favouriteId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body._id).toBe(favouriteId);
  });

  test('should add 3 Favourite item to an Favourite list', async () => {
    const promises = initialFavouritesItems.map((item) => (
      request.post(`/api/favs/${favouriteId}/add`)
        .set('Authorization', `Bearer ${token}`)
        .send(item)));

    await Promise.all(promises);

    const response = await request
      .get(`/api/favs/${favouriteId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.items.length).toBe(initialFavouritesItems.length);
  });
});
