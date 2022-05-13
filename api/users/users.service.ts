import crypto from 'crypto';
import User from './users.model';

export const getAllUsers = async () => {
  const users = await User.find({});

  return users;
};

export const getOneUser = async (id:string) => {
  const user = await User.findById(id);

  return user;
};

export const createUser = async (email:string, password:string) => {
  const user = new User({
    email,
    password,
  });

  user.passResetToken = crypto.randomBytes(20).toString('hex');
  user.passResetExpires = new Date(Date.now() + 3600000 * 24);

  await user.save();

  return user;
};
