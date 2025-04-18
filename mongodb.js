<<<<<<< HEAD
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, //timeout 5s
    });
    console.log('MongoDB Atlas Connected');
  } catch (err) {
    console.error('Atlas Connection Error:', err.message);
    process.exit(1);
  }
};

=======
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, //timeout 5s
    });
    console.log('MongoDB Atlas Connected');
  } catch (err) {
    console.error('Atlas Connection Error:', err.message);
    process.exit(1);
  }
};

>>>>>>> 2fc02b444ab6b7fb8b3358db033b487e71bff86d
module.exports = connectDB;