const express = require('express');
const {startQuiz, sumbitAnswer, displayScore} = require('../controllers/quiz.controller.js')
const router = express.Router();


// get the score
router.get("/score", displayScore);

// start quiz
router.get("/:index", startQuiz);

// submit an answer
router.post("/", sumbitAnswer);

module.exports = router;