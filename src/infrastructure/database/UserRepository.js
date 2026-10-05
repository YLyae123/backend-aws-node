const db = require("./database");
const Usuario = require("../../domain/entities/Usuario");

class UserRepository {
  findByEmail(correo) {
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT * FROM users WHERE email = ?",
        [correo],
        (error, row) => {
          if (error) {
            return reject(error);
          }

          if (!row) {
            return resolve(null);
          }

          resolve(
            new Usuario(
              row.id,
              row.name,
              row.email,
              row.password,
              row.role
            )
          );
        }
      );
    });
  }

  create(nombre, correo, password, role = "user") {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
        [nombre, correo, password, role],
        function (error) {
          if (error) {
            return reject(error);
          }

          resolve(
            new Usuario(
              this.lastID,
              nombre,
              correo,
              password,
              role
            )
          );
        }
      );
    });
  }
}

module.exports = UserRepository;
