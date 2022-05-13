import { Request, Response } from 'express';

export const handlerGetAllFav = async (req : Request, res : Response) => {
  res.json('handlerGetAllFav');
};

export const handlerCreateOneFav = async (req : Request, res : Response) => {
  res.json('handlerCreateOneFav');
};

export const handlerGetOneFav = async (req : Request, res : Response) => {
  res.json('handlerGetOneFav');
};

export const handlerDeleteOneFav = async (req : Request, res : Response) => {
  res.json('handlerDeleteOneFav');
};
