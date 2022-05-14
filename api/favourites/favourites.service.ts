import Favourites from './favourites.model';
import { IFavourites, IFavouritesItem } from './types';

export const getAllFav = async (userId:string) => {
  const favLists = await Favourites.find({ userId });

  return favLists;
};

export const createOneFav = async (data:IFavourites) => {
  const newFavList = await Favourites.create(data);

  return newFavList;
};

export const getOneFav = async (_id:string, userId: string) => {
  const favList = await Favourites.findOne({ _id, userId });

  return favList;
};

export const addOneFavItem = async (_id:string, userId:string, data:IFavouritesItem) => {
  const updatedFavList = await Favourites.findOneAndUpdate(
    { _id, userId },
    { $push: { items: data } },
    { new: true },
  );

  return updatedFavList;
};
