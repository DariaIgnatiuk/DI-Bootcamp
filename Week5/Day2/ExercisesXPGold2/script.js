// Exercise 1: Sum elements
// Write a JavaScript program to find the sum of all elements in an array.

// let arr = [1,2,3,4];
// let result = arr.map((item) => item * 2);
// console.log(result);


// Exercise 2 : Remove Duplicates
// Write a JavaScript program to remove duplicate items in an array.

// let arr = [1,2,1,3,4];
// let result = arr.filter((item, index) => {
//     return arr.indexOf(item) === index;
// });
// console.log(result);


// Exercise 3 : Remove certain values
// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

// const array = [NaN, 0, 15, false, -22, '',undefined, 47, null];
// let exceptions = [null, 0, '', false, undefined, NaN];
// let result = array.filter(item => exceptions.includes(item) == false);
// console.log(result);


// Exercise 4 : Repeat please !
// Write a JavaScript function to concatenate a given string n times (default is 1).
// Create the repeat function yourself:

// let repeat = function (message, count) {
//     result = '';
//     for (let i =0; i < count; i++){
//         result += message;
//     }
//     return result;
// }

// console.log(repeat('Ha!',3));


// Exercise 5 : Turtle & Rabbit

const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
turtle = turtle.padStart(9);
rabbit = rabbit.padStart(9);
console.log(startLine);
console.log(turtle);
console.log(rabbit);
turtle = turtle.trim().padEnd(9, '=');
console.log(turtle);