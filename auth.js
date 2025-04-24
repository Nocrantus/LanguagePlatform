const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateToken = (req, res, next) => {
  // 1. Get token from Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer TOKEN"
  
  // 2. If no token, return 401 Unauthorized
  if (!token) {
    return res.status(401).json({ 
      message: 'Access denied. No token provided.' 
    });
  }

  // 3. Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ 
        message: 'Invalid or expired token' 
      });
    }
    
    // 4. If valid, attach user data to request
    req.user = {
      userId: decoded.userId,
      email: decoded.email
    };
    
    // 5. Continue to the protected route
    next();
  });
};

module.exports = authenticateToken;