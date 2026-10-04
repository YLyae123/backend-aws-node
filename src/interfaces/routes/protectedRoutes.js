const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: "Acceso autorizado al recurso protegido",
    user: {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    }
  });
});

module.exports = router;
