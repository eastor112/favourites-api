import { Request, Response } from 'express';
import User from '../api/users/users.model';
import comparePassword from '../helpers/comparePassword';
import { signToken } from './auth.local.service';

const handlerLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      msg: 'Email or password is incorrect - user',
    });
  }

  const isCorrectPassword = await comparePassword(password, user.password);

  if (!isCorrectPassword) {
    return res.status(400).json({
      msg: 'Email or password is incorrect - password',
    });
  }

  try {
    const token = await signToken({
      _id: user._id.toString(),
      email: user.email,
    });

    return res.status(200).json({
      token,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Something went wrong with token',
    });
  }
};

export default handlerLogin;
