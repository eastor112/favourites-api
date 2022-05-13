import { Request, Response } from 'express';

const handlerLogin = async (req: Request, res: Response) => {
  res.json('login');
};

export default handlerLogin;
