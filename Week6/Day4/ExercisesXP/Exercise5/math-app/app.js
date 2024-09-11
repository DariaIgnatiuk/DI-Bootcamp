const { add, subtract} = require("./math");
const _ = require('lodash');

let random_number = _.random(0,100);
console.log(random_number);
const number = 5.48356592;
const roundedNumber = _.round(number,3)
console.log(roundedNumber);
console.log(add(1,5));
console.log(subtract(5,1));

