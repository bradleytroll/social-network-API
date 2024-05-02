const express = require('express');
const connectDB = require('./config/connection');
const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt');
require('dotenv').config();
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes)

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

connectDB(); 

mongoose.connection.once('open', () => {
  console.log('MongoDB connection open');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



