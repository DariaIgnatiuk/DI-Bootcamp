// Exercise 1 : Comparison
// 1. Create a function called compareToTen(num) that takes a number as an argument.
// 2. The function should return a Promise:
// - the promise resolves if the argument is less than or equal to 10
// - the promise rejects if argument is greater than 10.

// function compareToTen(num){
//     return new Promise((res, rej) => {
//         if (num <= 10){res(`${num} is resolved`)}
//         else {rej(`${num} is rejected`)}
//     })
// }

// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))


// Exercise 2 : Promises
// Create a promise that resolves itself in 4 seconds and returns a “success” string.

// function getSuccess(){
//     return new Promise((res) => {
//         setTimeout(() =>{
//             res("success");
//         },4 * 1000);
//     })
// }

// getSuccess().then((result) => {console.log(result)})


// Exercise 3 : Resolve & Reject
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

// function resolve(){
//     return Promise.resolve(5);
// }

// resolve()
// .then((result) => {console.log(result);
// })

// function reject(){
//     return Promise.reject('Boo!');
// }

// reject()
// .catch((err) => {console.log(err);
// })


