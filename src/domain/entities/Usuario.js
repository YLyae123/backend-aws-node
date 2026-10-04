class Usuario {
  constructor(id, nombre, correo, password, role = "user") {
    this.id = id;
    this.nombre = nombre;
    this.correo = correo;
    this.password = password;
    this.role = role;
  }

  validarCredenciales(correo, password) {
    return this.correo === correo && this.password === password;
  }
}

module.exports = Usuario;
