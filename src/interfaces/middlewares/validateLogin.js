function validateLogin(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Correo y contraseña son obligatorios"
    });
  }

  if (typeof email !== "string" || typeof password !== "string") {
    return res.status(400).json({
      success: false,
      message: "Formato de datos inválido"
    });
  }

  if (!email.includes("@")) {
    return res.status(400).json({
      success: false,
      message: "Formato de correo inválido"
    });
  }

  if (email.length > 150 || password.length > 100) {
    return res.status(400).json({
      success: false,
      message: "Los datos exceden la longitud permitida"
    });
  }

  next();
}

module.exports = validateLogin;
