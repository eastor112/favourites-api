import jwt from 'jsonwebtoken';

export const signToken = async (payload:{email:string}) => {
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
