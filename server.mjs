// Imports
import express from 'express';

import fs from 'fs';
import bodyParser from 'body-parser';
;



// Create an instance of express
const app = express();
let PORT = 3000;

//two pieces of custom middleware.
app.use(logger)
app.use(auth)
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

//routes
//Create GET routes for all data that should be exposed to the client.
//Create and render at least one view using a view template and template engine
app.get('/', (req, res,) => {
    res.render('home', {
      title: 'Sign Up',
     
    });
  });
  app.get('/userpage', (req, res) => {
    res.send('About Page');
});
  









  
app.set('views', './views')
app.set('view engine', 'pug')

  

  function logger(req,res,next){
    console.log("thank you");
    next()
  }
  // two pieces of custom middleware.
  //Include query parameters for data filtering, where appropriate
  function auth (req,res,next){
//if(req.query.admin ==='true'){
    next()
//}else { res.send('')}
  }

  //post 
  app.post('./views/default.pug',
    (req, res) => {
        const{username, email} =req.body;
        res.send("thank you")
    })
//delete
app.delete('./views/default.pug/:id',
    (req, res) => {
        const{username, email} =req.body;
        res.send("new user added")
    })
//put
app.put('/userpage', (req, res) => {
    res.send('About Page');
});
// Listen
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});