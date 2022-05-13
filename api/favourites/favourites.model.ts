import mongoose from 'mongoose';
import { IFavourites } from './types';

const FavouritesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  items: [String],
}, {
  timestamps: true,
});

export default mongoose.model<IFavourites>('Favourite', FavouritesSchema);
