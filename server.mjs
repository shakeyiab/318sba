// Imports
import express from 'express';
import userroutes from './routes/userroutes.mjs';
import fs from 'fs';
import bodyParser from 'body-parser';
;



// Create an instance of express
const app = express();
let PORT = 3000;
app.use(logger)
app.use(auth)
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));


app.get('/', (req, res,) => {
    res.render('home', {
      title: 'Sign Up',
     
    });
  });.

app.get('/', auth,(req, res) => {
    
  });





  
app.set('views', './views')
app.set('view engine', 'pug')

  

  function logger(req,res,next){
    console.log("thank you");
    next()
  }
  
  function auth (req,res,next){
    console.log("auth");
    next()
  }
  

  

// Listen
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
