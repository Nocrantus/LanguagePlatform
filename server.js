require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const authenticateToken = require('./middlewares/auth');
const User = require('./models/users');

// Initialize Express
const app = express();

// Middleware
app.use(cors(
  {
    origin: 'http://localhost:5000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For form data
app.use(express.json()); // For JSON data

// Routes
app.use('/api/auth', authRoutes);

// Protected Test Route
app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Protected route accessed successfully' });
});

app.get('/api/user-data', authenticateToken, (req, res) => {
  // Only accessible with valid token
  res.json({ user: req.user });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('SQLite database initialized');
});