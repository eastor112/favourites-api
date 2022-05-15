import jwt from 'jsonwebtoken';
import { JwtPayload } from './types';

export const signToken = async (payload:JwtPayload) => {
  try {
    const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: '24h',
    });

    return token;
  } catch (error) {
    return null;
  }
};

export const login = async () => {
  return 'login';
};
