class AuthService {
  login(email, password) {
    if (!email || !password) {
      return {
        success: false,
        message: "Correo y contraseña son obligatorios"
      };
    }

    if (email === "leonardo.89@unach.mx" && password === "9235") {
      return {
        success: true,
        user: {
          id: 1,
          name: "Leonardo",
          email: email
        }
      };
    }

    return {
      success: false,
      message: "Credenciales incorrectas"
    };
  }
}

module.exports = AuthService;
