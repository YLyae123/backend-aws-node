const AuthProvider = require("../../infrastructure/auth/AuthProvider");

const authProvider = new AuthProvider();

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Token de autenticación requerido"
    });
  }

  const token = authHeader.split(" ")[1];
  const decoded = authProvider.validateToken(token);

  if (!decoded) {
    return res.status(401).json({
      success: false,
      message: "Token inválido o expirado"
    });
  }

  req.user = decoded;

  next();
}

module.exports = authMiddleware;
