const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});