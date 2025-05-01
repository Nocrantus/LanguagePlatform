require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const authenticateToken = require('./middlewares/auth');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const db = require('./database');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.',
});
// Initialize Express
const app = express();

// Middleware
app.use(cors(
  {
    origin: 'http://localhost:5000',
    credentials: true,
  }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For form data
app.use(express.json()); // For JSON data
app.use(helmet()); // Security headers
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5000',
  credentials: true,
}));

app.get('/api/check-auth', authenticateToken, (req, res) => {
  res.json({ isAuthenticated: true, user: req.user });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/auth', authLimiter); // Apply rate limiting to auth routes
app.use('/api/auth/reset-password', authLimiter); // Apply rate limiting to reset password route

// Protected Test Route
app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Protected route accessed successfully' });
});

app.get('/api/user-data', authenticateToken, (req, res) => {
  // Only accessible with valid token
  res.json({ user: req.user });
});

// Error Handling Middleware
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('SQLite database initialized');
});