import { Request } from 'express';
import { Document, ObjectId, Types } from 'mongoose';

export interface IFavouritesItem{
  title: string;
  description?: string;
  link?: string;
}

export interface IFavourites{
    name: string;
    userId: Types.ObjectId | undefined;
    items?: IFavouritesItem[];
}

export interface IFavouritesModel extends IFavourites, Document{
    _id: string;
}

export interface IExtendedRequest extends Request{
    user: {
        _id: ObjectId;
        email: string;
    };
}
