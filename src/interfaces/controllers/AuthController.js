const AuthService = require("../../application/services/AuthService");
const AuthProvider = require("../../infrastructure/auth/AuthProvider");

class AuthController {
  constructor() {
    this.authService = new AuthService();
    this.authProvider = new AuthProvider();
  }

  login = (req, res) => {
    const { email, password } = req.body;

    const result = this.authService.login(email, password);

    if (!result.success) {
      return res.status(401).json(result);
    }

    const token = this.authProvider.generateToken(result.user);

    return res.json({
      success: true,
      message: "Inicio de sesión correcto",
      user: result.user,
      token: token
    });
  };
}

module.exports = AuthController;
