import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;


if (!MONGO_URL) {
    console.log('Error: MONGO_URL is not defined in the environment variables.');
    process.exit(1); // Exit the process with failure code
}

// Connect Database
export const connectDB = () =>
  console.log('Connecting to DB...');

  mongoose
    .connect(MONGO_URL)
    .then(() => console.log(`DB Connected Successfully: ${MONGO_URL}`))
    .catch((err) => {
      console.error('DB Connection Failed!');
      console.error(err);
      process.exit(1); 
    });

export default connectDB;
