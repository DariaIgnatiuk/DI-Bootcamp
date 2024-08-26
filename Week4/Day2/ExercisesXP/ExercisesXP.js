// 🌟 Exercise 1 : List of people

// const people = ["Greg", "Mary", "Devon", "James"];

// 1. Write code to remove “Greg” from the people array.
// people.splice(0, 1);
// console.log(people);

// 2. Write code to replace “James” to “Jason”.
// people.splice(2, 1, "Jason");
// console.log(people);

// 3. Write code to add your name to the end of the people array.
// people.push("Daria");
// console.log(people);

// 4. Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
// console.log(people.indexOf("Mary"))

// 5. Write code to make a copy of the people array using the slice method.
//The copy should NOT include “Mary” or your name.
// let peopleCopy = people.slice(1,4);
// console.log(peopleCopy);

// 6. Write code that gives the index of “Foo”. Why does it return -1 ?
// .indexOf(x) returns -1 if x was not found 
// console.log(people.indexOf("Foo"))

// 7. Create a variable called last which value is the last element of the array.
// let last  = people[people.length - 1]
// console.log(last)

// Part II - Loops
// 1. Using a loop, iterate through the people array and console.log each person.

// for (let i in people){
//     console.log(i,' - ' ,people[i]);
// }

// 2. Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .

// for (let i in people){
//     if (people[i] === 'Devon'){
//         break;
//     }
//     console.log(i,' - ' ,people[i]);
// }


// 🌟 Exercise 2 : Your favorite colors
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.

// colors = ['pink', 'yellow', 'white', 'blue', 'grey'];
// for (let i in colors){
//     let index = i + 2
//     console.log(`My #${i + 1} choice is ${colors[i]}`);
// }

// colors = ['pink', 'yellow', 'white', 'blue', 'grey'];
// for (let i in colors){
//     let index = parseInt(i); 
//     console.log(`My #${index + 1} choice is ${colors[i]}`);
// }
// suffixes = ['st', 'nd', 'rd', 'th', 'th'];
// for (let i in colors){
//     let index = parseInt(i); 
//     console.log(`My ${index + 1}${suffixes[i]} choice is ${colors[i]}`);
// }


// 🌟 Exercise 3 : Repeat the question
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

// I checked this code in browser/inspect/console
// do {
//     let answer = prompt("Enter your number:");
//     number = parseInt(answer); 
// }
// while (number < 10)


// 🌟 Exercise 4 : Building Management

// 1. Copy and paste the above object to your Javascript file.

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// 2. Console.log the number of floors in the building.

// console.log(building.numberOfFloors)

// 3. Console.log how many apartments are on the floors 1 and 3.

// console.log(`On the 1st floor there are ${building.numberOfAptByFloor.firstFloor} apartments`);
// console.log(`On the 13rd floor there are ${building.numberOfAptByFloor.thirdFloor} apartments`);

// 4. Console.log the name of the second tenant and the number of rooms he has in his apartment.

// console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0])

// 5. Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

// console.log(building.numberOfRoomsAndRent.dan[1])
// if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]) {
//     building.numberOfRoomsAndRent.dan[1] = 1200
// }
// console.log(building.numberOfRoomsAndRent.dan[1])


// 🌟 Exercise 5 : Family
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

// let family = {
//     mother : 'Sveta',
//     fater : 'Anton',
//     daughter : 'Dasha',
//     son : 'Ilya'
// }

// for (let x in family) {
//     console.log(x) 
//   }
//   for (let x in family) {
//     console.log(family[x]) 
//   }

// Exercise 6 : Rudolf
// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”

// const details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'reindeer'
// }
// result = ''
// for (let x in details) {
//     result +=  x + ' ' +  details[x] + ' '
//   }
// console.log(result)


// Exercise 7 : Secret Group
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”


const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let initials = []
for (let i in names){
    initials.push(names[i][0])
}
initials.sort()
initialsString = initials.join('')
console.log(initialsString)