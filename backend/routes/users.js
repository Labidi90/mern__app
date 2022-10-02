const auth = require("../middlewares/auth");

const express = require("express");
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userController");
const router = express.Router();
const { body } = require("express-validator");

router.post(
  "/",
  body("name", "Please add a name").notEmpty(),
  body("email", "Please add a valid email").isEmail(),
  body(
    "password",
    "Please enter a passwrod with six or more characters"
  ).isLength({ min: 6 }),
  registerUser
);

router.post("/login", loginUser);

router.get("/me", auth, getUser);

module.exports = router;
