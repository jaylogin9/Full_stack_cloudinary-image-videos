const express = require('express');
const router = express.Router();

const home = require("../controllers/home.Controller.js");
const register = require("../controllers/register.Controller.js");
const display = require("../controllers/display.Controller.js");

router.get("/home", home);
router.post("/register", register);
router.post("/display/:id", display);

module.exports= router;