import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load .env file

const uri = process.env.MONGO_URI;

export async function connectToDatabase() {
  try {
    if (!uri) {
      throw new Error('MongoDB connection URI is missing.');
    }

    await mongoose.connect(uri);
    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
  }
}
