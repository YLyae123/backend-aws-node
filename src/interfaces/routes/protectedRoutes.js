const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const requireRole = require("../middlewares/roleMiddleware");

const router = express.Router();

router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: "Acceso autorizado al recurso protegido",
    user: {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role
    }
  });
});

router.get(
  "/admin",
  authMiddleware,
  requireRole("admin"),
  (req, res) => {
    res.json({
      success: true,
      message: "Acceso autorizado: recurso exclusivo para administradores",
      user: {
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        role: req.user.role
      }
    });
  }
);

module.exports = router;
