// Exercise 1: Union Types
// Write a function called processValue that accepts one parameter of type string | number.
// If the input is a number, format it as a currency string (e.g., $100.00).
// If the input is a string, return the reversed version of the string.
// Test the Function:
// Call the processValue function with different inputs (both strings and numbers) to verify functionality.
// const processValue = (value: string | number): string =>{
//     if (typeof value === 'number') {
//         return `$${value.toFixed(2)}`;
//     } else {
//         return value.split('').reverse().join('');
//     }
// }
// console.log(processValue(2));
// console.log(processValue('Hello there'));
// Exercise 2: Array Type Annotations
// Create the Function:
// Write a function named sumNumbersInArray that accepts an array of number | string.
// Iterate through the array and sum only the number values, ignoring strings.
// Test sumNumbersInArray with different arrays containing both numbers and strings.
// const sumNumbersInArray = (arr: (number|string)[]):number => {
//     let sum: number = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             sum += arr[i] as number;
//         }
//     }
//     return sum;
// }
// console.log(sumNumbersInArray([1, '2', 3, '4', 5])); 
// Exercise 3: Type Aliases
// Create a type alias called AdvancedUser that represents a user object with the properties: name, age, and an optional address.
// Write a function introduceAdvancedUser that takes an AdvancedUser and returns a greeting message including the user’s name and age.
// If the address property is present, include it in the greeting message.
// Test introduceAdvancedUser with and without the address property.
// type AdvancedUser = {
//     name:string;
//     age: number;
//     address?: string;
// }
// const introduceAdvancedUser = (user: AdvancedUser): string => {
//     let message: string = `Hello, my name is ${user.name} and I am ${user.age} years old.`;
//     if (user.address) {
//         message += ` My address is ${user.address}.`;
//     }
//     return message;
// }
// console.log(introduceAdvancedUser({ name: 'Alice', age: 25 }));
// console.log(introduceAdvancedUser({ name: 'Bob', age: 30, address: '123 Main St' }));
// Exercise 4: Optional Parameters
// Write a function welcomeUser that takes a required name and an optional greeting.
// If no greeting is provided, use "Hello" as the default.
// Test welcomeUser with and without a custom greeting.
var welcomeUser = function (name, greeting) {
    if (greeting === void 0) { greeting = 'Hello'; }
    return "".concat(greeting, ", ").concat(name);
};
console.log(welcomeUser('Alice'));
console.log(welcomeUser('Bob', 'Bonjour'));
