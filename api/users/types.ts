export interface IUser {
  email: string;
  password: string;
  name?: string;
  lastname?: string;
  passResetToken?: string;
  passResetExpires?: Date;
}
