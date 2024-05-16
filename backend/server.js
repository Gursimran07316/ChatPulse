import express from 'express'
import data from './data/data.js'

import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
const port=5001;
connectDB()
const app = express();
app.get('/', (req, res) => {
    res.send('API is running....');
  });
  app.get('/chatdata', (req, res) => {
    res.send(data);
  }); 
app.listen(port, () => console.log(`Server running in  mode on port ${port}`))