const AuthService = require("../../application/services/AuthService");
const AuthProvider = require("../../infrastructure/auth/AuthProvider");

class AuthController {
  constructor() {
    this.authService = new AuthService();
    this.authProvider = new AuthProvider();
  }

  login = async (req, res) => {
    try {
      const { email, password } = req.body;

      const result = await this.authService.login(email, password);

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

    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error interno del servidor"
      });
    }
  };
}

module.exports = AuthController;
