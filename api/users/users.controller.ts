import { Request, Response } from 'express';

export const handlerGetAllUsers = async (req: Request, res: Response) => {
  return res.json('handlerGetAllUsers');
};

export const handlerGetOneUser = async (req: Request, res: Response) => {
  return res.json('handlerGetOneUser');
};

export const handlerCreateUser = async (req: Request, res: Response) => {
  return res.json('handlerCreateUser');
};

export const handlerCompleteUpdateUser = async (req: Request, res: Response) => {
  return res.json('handlerCompleteUpdateUser');
};

export const handlerPartialUpdateUser = async (req: Request, res: Response) => {
  return res.json('handlerPartialUpdateUser');
};

export const handlerDeleteUser = async (req: Request, res: Response) => {
  return res.json('handlerDeleteUser');
};
