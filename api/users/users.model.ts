import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { IUser } from './types';

const UserSchema = new mongoose.Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: '',
  },
  lastname: {
    type: String,
    default: '',
  },
  passResetToken: {
    type: String,
  },
  passResetExpires: {
    type: Date,
  },
}, {
  timestamps: true,
});

UserSchema.methods.toJSON = function () {
  const user = this;

  const { password, __v, state, ...rest } = user.toObject();

  return rest;
};

UserSchema.pre('save', async function (next) {
  const user = this;
  try {
    if (!user.isModified('password')) {
      return next();
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
    return next();
  } catch (error) {
    if (error instanceof Error) {
      return next(error);
    }
    return next(new Error('Error in UserSchema.pre'));
  }
});

UserSchema.methods.comparePassword = async function (candidatePassword:string) {
  const user = this;
  try {
    return bcrypt.compareSync(candidatePassword, user.password);
  } catch (error) {
    return error;
  }
};

export default mongoose.model<IUser>('User', UserSchema);
