// Imports
import express from 'express';
import userroutes from './routes/userroutes.mjs';
import fs from 'fs';
import bodyParser from 'body-parser';
import loggr from './data/logger.mjs';
import auth from './data/auth.mjs';

import path from "path"

// Create an instance of express
const app = express();
let PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));


  
app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('home', {
      title: 'Search Hacker News',
    });
  });
  
  
  
  app.use('/', userroutes);

// Listen
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});