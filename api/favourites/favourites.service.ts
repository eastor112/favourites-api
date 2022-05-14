import Favourites from './favourites.model';
import { IFavourites } from './types';

export const getAllFav = async () => {
  const favLists = await Favourites.find({});

  return favLists;
};

export const createOneFav = async (data:IFavourites) => {
  const newFavList = await Favourites.create(data);

  return newFavList;
};

export const getOneFav = async (id:string) => {
  const favList = await Favourites.findById(id);

  return favList;
};
