import { Request, Response } from 'express';
import {
  createOneFav,
  getAllFav,
  getOneFav,
} from './favourites.service';

export const handlerGetAllFav = async (req : Request, res : Response) => {
  try {
    const favLists = await getAllFav();

    return res.json(favLists);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json(error.message);
    }
    return res.status(500).json('Error in handlerGetAllFav');
  }
};

export const handlerCreateOneFav = async (req : Request, res : Response) => {
  const { body } = req;

  try {
    const newFavList = await createOneFav(body);
    return res.status(201).json(newFavList);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json(error.message);
    }
    return res.status(500).json('Error in handlerCreateOneFav');
  }
};

export const handlerGetOneFav = async (req : Request, res : Response) => {
  const { id } = req.params;

  try {
    const favList = await getOneFav(id);

    return res.json(favList);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json(error.message);
    }
    return res.status(500).json('Error in handlerGetOneFav');
  }
};
