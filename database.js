const Database = require('better-sqlite3');
const db = new Database('users.db');

// Create users table
db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT,
    resetToken TEXT,
    resetExpires DATETIME
  )
`).run();

module.exports = db;