import { Document } from 'mongoose';

export interface IFavourites{
    name: string;
    userId: string;
    items: string[];
}

export interface IFavouritesModel extends IFavourites, Document{
    _id: string;
}
