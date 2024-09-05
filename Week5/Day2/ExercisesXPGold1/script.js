// Exercise 1 : Analyzing the map method
// Analyze this code, what will be the output ?
// ANSWER: [2, 4, 6]

// console.log([1, 2, 3].map(num => {
//   if (typeof num === 'number') return num * 2;
//   return ;
// }));


// Exercise 2: Analyzing the reduce method
// Analyze this code, what will be the output ?
// ANSWER: [1, 2, 0, 1, 2, 3]

// console.log([[0, 1], [2, 3]].reduce(
//   (acc, cur) => {
//     return acc.concat(cur);
//   },
//   [1, 2],
// ));

// Exercise 3 : Analyze this code
// Using this code:

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2;
// })
// console.log(newArray);

// What is the value of i ?
// ANSWER: i is index


// Exercise 4 : Nested arrays

// 1. Using a method, take this array const array = [[1],[2],[3],[[[4]]],[[[5]]]] and modify it to look like this array: 
// [1,2,3,[4],[5]].
// Bonus Try to do it on one line.

// const array = [[1],[2],[3],[[[4]]],[[[5]]]];
// let newArray = array.flat(2);
// console.log(newArray);
 
// 2. Using a method, take this array const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; 
// and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].

// const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
// let greetingJoined = []
// for (const sentance of greeting){
//     let sentanceJoined = sentance.join(' ');
//     greetingJoined.push(sentanceJoined)
// }

// 3. Turn the greeting array into a string: ‘Hello young grasshopper! you are learning fast!’.

// greetingJoined = greetingJoined.join(' ');
// console.log(greetingJoined);

// 4. Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] 
let free = trapped.flat(25);
console.log(free);