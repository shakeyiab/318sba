// Imports
import express from 'express';

import bodyParser from 'body-parser';



// Create an instance of express
const app = express();
let PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.set('view engine','ejs');
app.get('/', (req, res) => {
    res.render('base',{title:"login"});
});

// Listen
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});