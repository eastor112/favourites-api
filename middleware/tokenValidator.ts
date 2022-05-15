import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../api/users/users.model';
import { JwtPayload } from '../auth/types';

const validateJwtMw = async (req: Request | any, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      msg: 'There is no token',
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

    const user = await User.findById(_id);

    if (!user) {
      return res.status(401).json({
        msg: 'invalid token',
      });
    }

    req.user = user;
    return next();
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).json({
        msg: error.message,
      });
    }
    return res.status(401).json({
      msg: 'invalid token',
    });
  }
};

export default validateJwtMw;
