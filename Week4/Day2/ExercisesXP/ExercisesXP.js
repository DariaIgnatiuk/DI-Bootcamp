//  Exercise 1 : List of people

const people = ["Greg", "Mary", "Devon", "James"];

// 1. Write code to remove “Greg” from the people array.
people.splice(0, 1);
// console.log(people);

// 2. Write code to replace “James” to “Jason”.
people.splice(2, 1, "Jason");
// console.log(people);

// 3. Write code to add your name to the end of the people array.
people.push("Daria");
console.log(people);

// 4. Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
// console.log(people.indexOf("Mary"))

// 5. Write code to make a copy of the people array using the slice method.
//The copy should NOT include “Mary” or your name.
let peopleCopy = people.slice(0,1);
console.log(peopleCopy);