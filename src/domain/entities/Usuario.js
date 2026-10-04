class Usuario {
    constructor(id, nombre, correo, password) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.password = password;
    }

    validarCredenciales(correo, password) {
        return this.correo === correo && this.password === password;
    }
}

module.exports = Usuario;
