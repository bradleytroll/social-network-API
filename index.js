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

//const apiRoutes = require('./routes');

//app.use('/api', apiRoutes);

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






// const express = require('express');
// const connectDB = require('./config/connection');
// const mongoose = require('mongoose');
// require('dotenv').config();
// const routes = require('./routes');

// connectDB(); // This starts the connection process

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(routes);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Internal Server Error');
// });

// mongoose.connection.once('open', () => {
//   console.log('MongoDB connection open');
// });

// mongoose.connection.on('error', err => {
//   console.error('MongoDB connection error:', err);
//   process.exit(1); // Exit the application if unable to connect to MongoDB
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });






// const express = require('express');
// const mongoose = require('mongoose');
// // require('dotenv').config();
// const routes = require('./routes/api');
// const connectDB = require('./config/connection');

// connectDB();

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', { 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true 
// });

// app.use('/api', routes);

// connectDB.once('open', () => {
//     app.listen(PORT, () => {
//         console.log(`API server now on port ${PORT}!`);
//     });
// });

// // app.listen(PORT, () => {
// //     console.log(`App running on port ${PORT}!`);
// // });