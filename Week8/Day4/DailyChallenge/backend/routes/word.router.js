const express = require("express");

const {
    sayHello,
    getMessage
} = require("../controllers/word.controller.js");

const router = express.Router();


router.get("/hello", sayHello);

router.post("/world", getMessage);



module.exports = router;