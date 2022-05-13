/* eslint-disable no-console */
import mongoose from 'mongoose';

const env = process.env.NODE_ENV;

let URI: string | undefined = '';

if (env === 'test') {
  URI = process.env.MONGO_DB_URI_TEST;
} else {
  URI = process.env.MONGO_DB_URI;
}

const connectDB = async () => {
  try {
    console.log(URI);
    if (URI) {
      await mongoose.connect(URI);
      console.log('MongoDB Connected');
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
