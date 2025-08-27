import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import { connectDB } from './lib/db.js';
import cookieParser from "cookie-parser"


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoutes);


app.listen(PORT, () => {
  console.log('Server Started at http://localhost:' + PORT);
  connectDB();
});