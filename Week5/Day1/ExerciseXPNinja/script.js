// 1. Create a function such as mergeWords('Hello')() that returns the following string: 'Hello'

// function mergeWords(word) {
//     return function() {
//       console.log(word);
//     };
//   }

// mergeWords('Hello')();


// 2. When the function is called without any arguments return a string where all words have been merged into a sentenc
// function mergeWords(word) {
//     return function(nextWord) {
//       if (nextWord === undefined) {
//         return word;
//       } else {
//         return mergeWords(word + ' ' + nextWord);
//       }
//     };
// }
  
// const result = mergeWords('There')('is')('no')('spoon.')();
// console.log(result); 


// 3. Below is a verbose JavaScript solution, turn this into a currying function.

// function mergeWords(string) {
//     return function(nextString) {
//       if (nextString === undefined) {
//         return string;
//       } else {
//         return mergeWords(string + ' ' + nextString);
//       }
//     }
// }

// const mergeWords = string =>  nextString  => {(nextString === undefined) ? 
//     string :  mergeWords(string + ' ' + nextString)}

const mergeWords = string => function(nextString) {
        return nextString === undefined ? string : mergeWords(string + ' ' + nextString);
    };

const result = mergeWords('There')('is')('no')('spoon.')();
console.log(result);