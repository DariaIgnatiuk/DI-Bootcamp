const fs = require("fs");

fs.readdir('/Users/dariaignatyuk/Desktop/DI-Bootcamp/Week6/Day4/ExercisesXP/Exercise6/npm-beginner', (err,data) =>{
    if(err) return console.log(err); console.log(data);
    
}) 