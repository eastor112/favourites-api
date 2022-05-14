import mongoose from 'mongoose';
import { IFavourites } from './types';

const FavouritesSchema = new mongoose.Schema<IFavourites>({
  name: {
    type: String,
    required: true,
    uppercase: true,
    unique: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [{
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    link: {
      type: String,
    },
  }],
}, {
  timestamps: true,
});

export default mongoose.model<IFavourites>('Favourite', FavouritesSchema);
