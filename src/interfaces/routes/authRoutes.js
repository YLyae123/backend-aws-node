const express = require("express");
const AuthController = require("../controllers/AuthController");
const validateLogin = require("../middlewares/validateLogin");

const router = express.Router();
const authController = new AuthController();

router.post(
  "/login",
  validateLogin,
  authController.login
);

module.exports = router;
