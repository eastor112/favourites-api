import { Request, Response } from 'express';
import { createUser, getAllUsers, getOneUser } from './users.service';

export const handlerGetAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();

    return res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json(error.message);
    }
    return res.status(500).json('Error in handlerGetAllUsers');
  }
};

export const handlerGetOneUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await getOneUser(id);

    return res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json(error.message);
    }
    return res.status(500).json('Error in handlerGetOneUser');
  }
};

export const handlerCreateUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await createUser(email, password);

    return res.status(201).json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json(error.message);
    }
    return res.status(500).json('Error in handlerCreateUser');
  }
};
