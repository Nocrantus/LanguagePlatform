const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const authenticateToken = require('./middlewares/auth');
const cors = require('cors');



require('dotenv').config();

const app = express();

<<<<<<< HEAD
=======

>>>>>>> 2fc02b444ab6b7fb8b3358db033b487e71bff86d
// Connect to MongoDB
connectDB();

// Middleware
<<<<<<< HEAD
=======

>>>>>>> 2fc02b444ab6b7fb8b3358db033b487e71bff86d
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);

// Protected route example
app.get('/api/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));