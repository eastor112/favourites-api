import supertest from 'supertest';
import { connection } from 'mongoose';

import app from '../../../app';
import connectDB from '../../../config/database';
import Users from '../../../api/users/users.model';
import { initialUsers } from '../../testHelpers/initialData';

const request = supertest(app);

let userId:string;

describe('Users enpoints tests', () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await Users.deleteMany();
    await connection.close();
  });

  test('should create 3 users', async () => {
    const usersPromises = initialUsers.map((user) => request.post('/api/users').send(user));
    await Promise.all(usersPromises);

    const response = await request
      .get('/api/users');

    userId = response.body[0]._id;

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(initialUsers.length);
  });

  test('should get user by id', async () => {
    const response = await request
      .get(`/api/users/${userId}`);

    expect(response.status).toBe(200);
    expect(response.body._id).toBe(userId);
  });
});
