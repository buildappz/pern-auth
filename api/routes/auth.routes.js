var express = require('express');
const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
var router = express.Router();

// Create a new User
router.post("/signup", 
    verifySignUp.checkDuplicateUsernameOrEmail, //Middleware
    verifySignUp.checkRolesExisted, //Middleware
    controller.signup);

router.post("/signin", controller.signin);

module.exports = router;

