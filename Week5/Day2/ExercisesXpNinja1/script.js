// Exercise 1 : Dog age to Human years

// 1. Use a loop to find the sum of the dogs’ ages in human years.
// Hint: 1 dog year equals 7 human years

// 2. Using the reduce() method, find the sum of the dogs’ ages in human years.

// const data = [
//     {
//       name: 'Butters',
//       age: 3,
//       type: 'dog'
//     },
//      {
//       name: 'Cuty',
//       age: 5,
//       type: 'rabbit'
//     },
//     {
//       name: 'Lizzy',
//       age: 6,
//       type: 'dog'
//     },
//     {
//       name: 'Red',
//       age: 1,
//       type: 'cat'
//     },
//     {
//       name: 'Joey',
//       age: 3,
//       type: 'dog'
//     },
//     {
//       name: 'Rex',
//       age: 10,
//       type: 'dog'
//     },
//   ];

// ageHumanYears = []

// for (const dog of data){ageHumanYears.push(dog.age * 7);}
// console.log(ageHumanYears);

// let sum = ageHumanYears.reduce((total, item) => total + item);
// console.log(sum);


// Exercise 2 : Email
// Clean up this email to have no whitespaces. Do it in a single line (return a new string).

// let userEmail3 = ' cannotfillemailformcorrectly@gmail.com '
// userEmail3 = userEmail3.trimStart().trimEnd();
// console.log(userEmail3);


// Exercise 3 : Employees #3
// Change the structure of the users array. The user’s full name should be the key and the user’s role should be the value.
// Example: { 'Bradley Bouley': 'Full Stack Resident' }
// Hint: Step one, create an empty object.

// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//     { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//     { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//     { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//     { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//     { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//     { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// let users2 = {};

// for (const user of users){
//     users2[user.firstName + ' ' + user.lastName] = user.role;
// }

// console.log(users2);


// Exercise 4 : Array to Object
// 1. Use a for loop to get this output { x: 1, y: 1, z: 2 };
// 2. Use the reduce() method to get this output { x: 1, y: 1, z: 2 };

const letters = ['x', 'y', 'z', 'z'];

// 1
// let result = {};
// for (const letter of letters){
//     result[letter] = result[letter] ? result[letter] +1 : 1;
// }

// 2
const result = letters.reduce((total,item) => {
    return total[item] ? ++ total[item] : total[item] = 1, total; 
},{});

console.log(result);



