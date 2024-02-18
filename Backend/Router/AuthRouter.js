const express  = require("express");
// const router = express.Router();
const router = express.Router();
const { Register , Login , userInformation} = require("../Controllers/AuthController");
const authMiddleware = require("../middleware/AuthMiddleware");

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/user").get(authMiddleware , userInformation);

module.exports = router;