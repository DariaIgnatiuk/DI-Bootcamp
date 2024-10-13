// Exercise 1: Intersection Types
// Define an intersection type PersonWithAddress that combines Person and Address types. 
// Create a variable of this type with properties from both types.
// The Person type should contain name and age, the Address type should contain street and city,

// type Person = {
//   name: string;
//   age: number;
// }

// type Address = {
//   city: string;
//   street: string;
// }

// type PersonWithAddress = Person | Address;
// const person1: PersonWithAddress = {
//   name: 'Daria',
//   age: 35,
//   city: 'Netanya',
//   street: 'Levi Eshkol'
// }

// console.log(person1);



// Exercise 2: Type Guards with Union Types
// Create a function describeValue that accepts number | string. Use type guards to return a description based on the input type:

// "This is a number" for numbers.
// "This is a string" for strings.

// const describeValue = (param: number | string):string => {
//   if (typeof param === 'number') return "This is a number"
//   else if (typeof param ==='string') return "This is a string"
//   else return "Unknown type"
// }

// console.log(describeValue(1));
// console.log(describeValue('a'));



// Exercise 3: Type Casting
// Create a variable someValue of type any and cast it to a string. Then, use it as a string.

// let someValue: any;
// someValue = 'Hello, World!';
// console.log(typeof someValue);



// Exercise 4: Type Assertions with Union Types
// Create a function getFirstElement that takes an array of number | string and uses type assertions to return 
// the first element as a string. Test with arrays of mixed types.

// const getFirstElement = (arr: (number|string)[]): string => {
//   if (typeof arr[0] === 'string') {
//   return arr[0] as string;}
//   else {
//     return arr[0].toString() as string;
//   }
// }

// console.log(getFirstElement(["hello", 42])); 
// console.log(getFirstElement([44, 42])); 



// Exercise 5: Generic Constraints
// Create a generic function logLength that takes a parameter of type T constrained to types with a length property 
// (like string or Array). The function should log the length.


// const logLength = <T extends string|any[]>( param:T) => {
//     console.log(param.length);
// }

// logLength('hello');
// logLength([1, 2, 3]);
// logLength(1,2,3); //error
// logLength({id:1})//error
// logLength(1); //error


// Exercise 6: Intersection Types and Type Guards
// Define a type Employee that combines Person and Job using intersection types. Create a function describeEmployee that 
// takes an Employee object and uses type guards to return a description based on whether the Job is a Manager or a Developer.

// Person type: name: string; age: number;
// Job type: position: string; department: string;
// Employee type should combine these.
// describeEmployee should return a specific message for each type of job.

// type Person = {
//   name: string;
//   age: number;
// }

// type Job = {
//   position: string;
//   department: string;
// }

// type Employee = Person & Job;

// const describeEmployee = (employee: Employee): string => {
//   if (employee['position'] === "manager") return 'Be nice to your department'
//   else if (employee.position === "developer") return 'Write good code'
//   else return 'Unknown job type' 
// }

// const employee1: Employee ={
//   name: 'John',
//   age: 30,
//   position: 'developer',
//   department: 'Engineering'
// }

// console.log(describeEmployee(employee1));


// 🌟 Exercise 7: Type Assertions and Generic Constraints
// Create a generic function formatInput that takes a parameter of type T constrained to have a toString() method. 
// Use type assertions to ensure the parameter is treated as a string for formatting. The function should format the input as a string.

// const formatInput =<T extends { toString(): string }>(value:T):string => {
//   return value.toString() as string;
// }

// console.log(formatInput(55));
// console.log(formatInput('55'));
// console.log(formatInput(true));
// console.log(formatInput([1,2,3]));
