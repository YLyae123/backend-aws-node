const UserRepository = require("../../infrastructure/database/UserRepository");

class AuthService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async login(email, password) {
    if (!email || !password) {
      return {
        success: false,
        message: "Correo y contraseña son obligatorios"
      };
    }

    const usuario = await this.userRepository.findByEmail(email);

    if (!usuario || !usuario.validarCredenciales(email, password)) {
      return {
        success: false,
        message: "Credenciales incorrectas"
      };
    }

    return {
      success: true,
      user: {
        id: usuario.id,
        name: usuario.nombre,
        email: usuario.correo
        role: usuario.role
      }
    };
  }
}

module.exports = AuthService;
