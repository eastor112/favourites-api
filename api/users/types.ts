/* eslint-disable no-unused-vars */
import { Document } from 'mongoose';

export interface IUser {
  email: string;
  password: string;
  name?: string;
  lastname?: string;
  passResetToken?: string;
  passResetExpires?: Date;
}

export interface IUserModel extends IUser, Document {
  comparePassword: (candidatePassword: string) => Promise<boolean>;
}
