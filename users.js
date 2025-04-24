const db = require('../database');
const bcrypt = require('bcryptjs');

class User {
  static findByEmail(email) {
    return db.prepare('SELECT * FROM users WHERE email = ?').get(email);
  }

  static create(email, password) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const result = db.prepare(`
      INSERT INTO users (email, password) 
      VALUES (?, ?)
    `).run(email, hashedPassword);
    return this.findByEmail(email);
  }

  static updateResetToken(email, token) {
    const expires = new Date(Date.now() + 3600000); // 1 hour
    db.prepare(`
      UPDATE users 
      SET resetToken = ?, resetExpires = ?
      WHERE email = ?
    `).run(token, expires.toISOString(), email);
  }

  static resetPassword(token, newPassword) {
    const user = db.prepare(`
      SELECT * FROM users 
      WHERE resetToken = ? AND resetExpires > datetime('now')
    `).get(token);

    if (!user) return null;

    const hashedPassword = bcrypt.hashSync(newPassword, 10);
    db.prepare(`
      UPDATE users 
      SET password = ?, resetToken = NULL, resetExpires = NULL 
      WHERE id = ?
    `).run(hashedPassword, user.id);

    return this.findByEmail(user.email);
  }

  static comparePassword(candidatePassword, hashedPassword) {
    return bcrypt.compareSync(candidatePassword, hashedPassword);
  }
}

module.exports = User;