// Exercise 1: Hello, World! Program
// Create a TypeScript program that logs the message “Hello, World!” to the console.
// console.log('Hello, World!');

// Exercise 2: Type Annotations
// Define a variable age of type number and a variable name of type string, and log them to the console.

// let age:number = 35;
// let myName: string = 'Daria';
// console.log(age, myName);

// Exercise 3: Union Types
// Use union types to declare a variable id that can be either a string or a number.

// let id: string | number;

// Exercise 4: Control Flow with if...else
// Write a function that takes a number as input and returns a string indicating whether the number is positive, negative, or zero.
// Use if...else statements to control the flow of a program.

// function numType (num: number):string {
//     if (num > 0) {
//         return 'Positive';
//     } else if (num < 0) {
//         return 'Negative';
//     } else {
//         return 'Zero';
//     }
// }

// console.log(numType(1));


// Exercise 5: Tuple Types
// Create a function getDetails that takes a name and age as input and returns a tuple containing the input values and a greeting message.
// The tuple should contain multiple values of different types

// function getDetails(name:string, age:number): [string, number, string]{
//     return [name, age, `Hello, ${name}! You are ${age} years old.`]
// }

// // Call the function and log the tuple
// const details = getDetails("Alice", 25);
// // Expected output
// console.log(details); // Output: ['Alice', 25, 'Hello, Alice! You are 25 years old.']


// Exercise 6: Object Type Annotations
// 1. Define the Object Structure:
// Create an object type annotation that defines the shape of a Person object. The object should have two properties: 
//name (a string) and age (a number).

// 2. Create the Function:
// Write a function named createPerson that takes two parameters: name (string) and age (number).
// The function should return an object that matches the Person structure.

// 3. Test the Function:
// Test the createPerson function by creating a person and logging the result to the console.

// type Person =  {
//     name: string,
//     age: number
// }

// function createPerson(name: string, age: number): Person {
//     const result:Person = {
//         name: name,
//         age: age
//     }
//     return result;
// }

// console.log(createPerson('Daria', 35));


// Exercise 7: Type Assertions

// const inputElement = document.getElementById('myInput') as HTMLInputElement;
// inputElement.value = 'hello'


// Exercise 8: switch Statement with Complex Conditions
// Create a function getAction that takes a string representing a user role and returns an action for the user. 
// Use a switch statement with complex conditions to handle multiple roles.

// function getAction(role:string):string {
//     switch (role) {
//         case 'admin':
//             return 'Manage users and settings';
//         case 'editor':
//             return 'Edit content';
//         case 'viewer':
//             return 'View content';
//         case 'guest':
//             return 'Limited access';
//         case 'unknown':
//             return 'Invalid role'
//         default:
//             break;
//     }
// }

// // Test the function with different roles
// console.log(getAction("admin")); // Output: Manage users and settings
// console.log(getAction("editor")); // Output: Edit content
// console.log(getAction("viewer")); // Output: View content
// console.log(getAction("guest")); // Output: Limited access
// console.log(getAction("unknown")); // Output: Invalid role


// Exercise 9: Function Overloading with Default Parameters
// Create an overloaded function greet that can either take a name and greet the person, 
// or take no arguments and return a default greeting.

// function greet (name:string = '') {
//     return `Have a nice day ${name}!`
// }

// console.log(greet('Alex'));
// console.log(greet());

