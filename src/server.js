const express = require("express");
const authRoutes = require("./interfaces/routes/authRoutes");
const protectedRoutes = require("./interfaces/routes/protectedRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Backend funcionando correctamente",
    status: "OK"
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend ejecutándose en el puerto ${PORT}`);
});
