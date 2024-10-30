var express = require('express');
const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
var router = express.Router();

// Create a new Tutorial
router.post("/signup", controller.signup);

router.post("/signin", controller.signin);

module.exports = router;

