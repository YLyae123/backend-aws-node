const UserRepository = require("./UserRepository");

const userRepository = new UserRepository();

async function createUser() {
  try {
    const existingUser = await userRepository.findByEmail(
      "leonardo.89@unach.mx"
    );

    if (existingUser) {
      console.log("El usuario ya existe en la base de datos");
      process.exit(0);
    }

    const user = await userRepository.create(
      "Leonardo",
      "leonardo.aceituno89@unach.mx",
      "9235"
    );

    console.log("Usuario creado correctamente:");
    console.log({
      id: user.id,
      name: user.name,
      email: user.email
    });

    process.exit(0);

  } catch (error) {
    console.error("Error al crear el usuario:", error.message);
    process.exit(1);
  }
}

createUser();
