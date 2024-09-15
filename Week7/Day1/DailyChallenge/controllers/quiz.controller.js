const { triviaQuestions } = require("../config/data.js")
let score = 0;

const startQuiz = (req, res) =>{
  const { index } = req.params;
  const currentQuestion = triviaQuestions[index];
  if (index >= triviaQuestions.length) res.status(404);
  res.json(currentQuestion);
}

const sumbitAnswer = (req, res) => {
    const {answer, index} = req.body;
    if (index > triviaQuestions.length) return res.status(404).json({ message: "question not found" });
    if (answer === triviaQuestions[index].answer) {
      score ++;
      return res.json('You are correct')}
      else {
        return res.json('You are wrong')}

  }

  const displayScore = (req, res) =>{
    console.log('hello');
    return res.json(score);
}

module.exports = { 
    startQuiz, sumbitAnswer, displayScore}