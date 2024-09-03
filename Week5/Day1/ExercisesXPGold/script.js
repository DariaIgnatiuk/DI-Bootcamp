// Exercise 1 : Nested functions
// Using the code below, and before executing it, predict the outcome and explain how you came to this conclusion.
// ANSWER: ____/''''\\____ real result ____/''''\____ I didn't know about the back slash
// we run flat(4) which gives us ____, then mountain(4) - /''''\, and flat(4) again

// Change the code below to nested arrow functions.

// let landscape = () => {

//     let result = "";
   
//     const flat = x => {
//         for(let count = 0; count<x; count++){
//         result = result + "_";
//       }
//     }

//     const mountain = x => {
//         result = result + "/"
//         for(let counter = 0; counter<x; counter++){
//             result = result + "'"
//         }
//         result = result + "\\"
//     }
    
//     flat(4);
//     mountain(4);
//     flat(4)
   
//     return result;
//    }
   
// console.log(landscape())



// Exercise 2 : Closure
// Analyse the code below, and before executing it, predict the outcome of the last line.
// ANSWER: 13. x is 10 and y is 3

// const addTo = x => y => x + y;
// const addToTen = addTo(10);
// console.log(addToTen(3));


// Exercise 3 : Currying
// Analyse the code below, and before executing it, predict the outcome of the last line.
// ANSWER: 31. The same, a = 30, b = 1

// const curriedSum = (a) => (b) => a + b
// console.log(curriedSum(30)(1));


// Exercise 4 : Currying
// Analyse the code below, and before executing it, predict the outcome of the last line.
// ANSWER: 17

// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// console.log(add5(12))


// Exercise 5 : Composing
// Analyse the code below, and before executing it, predict the outcome of the last line.
// ANSWER: 16

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
console.log(compose(add1, add5)(10))