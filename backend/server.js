import express from 'express'
import data from './data/data.js'
import userRoutes from './routes/userRoutes.js'
import chatRoutes from './routes/chatRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';

const port=5001;
connectDB()
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('API is running....');
  });
  app.use("/api/user",userRoutes)
  app.use("/api/chats",chatRoutes)
  app.use("/api/messages",messageRoutes)
  app.get('/chatdata', (req, res) => {
    res.send(data);
  }); 
 
app.listen(port, () => console.log(`Server running in  mode on port ${port}`))