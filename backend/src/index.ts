import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import router from './router/index';
import cookieParser from 'cookie-parser';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(cookieParser());

// morgan middlewares
import morgan from 'morgan';
app.use(morgan('tiny'));

// regular middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req: Request, res: Response) => {
  res.send('Server is running');
});

app.use('/api',router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

