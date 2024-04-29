const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
    return conn;  // Optionally return the connection object
  } catch (err) {
    console.error('Failed to connect to MongoDB', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;


// const { connect, connection } = require('mongoose');

// const connectionString = 'mongodb://127.0.0.1:27017/studentsDB';

// connect(connectionString);

// module.exports = connection;




// const mongoose = require('mongoose');

// const connection = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/socialNetworkDB', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//     });
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

// module.exports = connection;