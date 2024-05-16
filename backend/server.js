import express from 'express'
import data from './data/data.js'
const app = express();
const port=5001;
app.get('/', (req, res) => {
    res.send('API is running....');
  });
  app.get('/chatdata', (req, res) => {
    res.send(data);
  }); 
app.listen(port, () => console.log(`Server running in  mode on port ${port}`))