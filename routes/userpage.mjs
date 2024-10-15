import express from 'express';
const router = express.Router();

//Create and use error-handling middleware.
app.get('/', (req, res) => {
    throw new Error('BROKEN') // Express will catch this on its own.
  })