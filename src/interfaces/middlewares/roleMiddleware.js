function requireRole(requiredRole) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Usuario no autenticado"
      });
    }

    if (req.user.role !== requiredRole) {
      return res.status(403).json({
        success: false,
        message: "Acceso denegado: permisos insuficientes"
      });
    }

    next();
  };
}

module.exports = requireRole;
