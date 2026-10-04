const jwt = require("jsonwebtoken");

class AuthProvider {
  constructor() {
    this.secret = process.env.JWT_SECRET || "clave-secreta-practica-aws";
  }

  generateToken(user) {
    return jwt.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email
      },
      this.secret,
      {
        expiresIn: "1h"
      }
    );
  }

  validateToken(token) {
    try {
      return jwt.verify(token, this.secret);
    } catch (error) {
      return null;
    }
  }
}

module.exports = AuthProvider;
