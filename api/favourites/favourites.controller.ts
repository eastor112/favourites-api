import { Request, Response } from 'express';
import {
  addOneFavItem,
  createOneFav,
  getAllFav,
  getOneFav,
} from './favourites.service';
import { IFavouritesItem } from './types';

export const handlerGetAllFav = async (req : Request | any, res : Response) => {
  const { user } = req;

  try {
    const favLists = await getAllFav(user._id.toString());

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

export const handlerGetOneFav = async (req : Request | any, res : Response) => {
  const { id } = req.params;
  const { user } = req;

  try {
    const favList = await getOneFav(id, user._id.toString());

    return res.json(favList);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json(error.message);
    }
    return res.status(500).json('Error in handlerGetOneFav');
  }
};

export const handlerAddOneFavItem = async (req : Request | any, res : Response) => {
  const { id } = req.params;
  const { user, body } = req;

  try {
    const updatedFavList = await addOneFavItem(id, user._id.toString(), body as IFavouritesItem);

    return res.json(updatedFavList);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json(error.message);
    }
    return res.status(500).json('Error in handlerAddOneFavItem');
  }
};
