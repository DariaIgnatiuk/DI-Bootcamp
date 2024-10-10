// Exercise 1: Class with Access Modifiers

// Create a class Employee with the following properties:
// A private property name of type string.
// A private property salary of type number.
// A public property position of type string.
// A protected property department of type string.
// Also, include a constructor to initialize these properties. 
// Create a public method getEmployeeInfo that returns the employee’s name and position.

// class Employee {
//     constructor(
//         private name:string, 
//         private salary:number, 
//         public position:string,
//         protected department:string)
//         {}

//     getEmployeeInfo():string {
//         return `${this.name} is a ${this.position}`
//     }
// }

// let employee = new Employee('John', 100, 'teacher', 'English');
// console.log(employee.getEmployeeInfo());


// Exercise 2: Readonly Properties in a Class

// Create a class Product with the following properties:
// A readonly property id of type number.
// A public property name of type string.
// A public property price of type number.
// Create a method getProductInfo that returns a string with the product’s name and price. 
// Attempt to modify the id property after creating a new instance of the class and observe the 
// result.

// class Product {
//     readonly id: number;
//     public name: string;
//     public price: number;
  
//     constructor(id: number, name: string, price: number) {
//       this.id = id;
//       this.name = name;
//       this.price = price;   
//     }
  
//     getProductInfo(): string {
//       return `${this.name} - $${this.price}`;
//     }
//   }

// const product = new Product(1, 'Product 1', 10.99);
// console.log(product.getProductInfo());
// product.id = 2; //cannot assign to read-only property


// Exercise 3: Class Inheritance
// Create a base class Animal with a public property name and a method makeSound that 
// returns a string. Create a subclass Dog that extends Animal and overrides the makeSound 
// method to return the sound a dog makes (“bark”). Create an instance of the Dog class and 
// call the makeSound method.

// class Animal {
//     constructor(public name: string) {}

//     makeSound(): string {
//         return `${this.name} makes a sound`;
//     }
// }

// class Dog extends Animal {
//     constructor(name:string) {
//         super(name);
//     }

//     makeSound(): string {
//         return `${this.name} says Wooof`;
//     }

// }

// const dog = new Dog('Leia');
// console.log(dog.makeSound());


// Exercise 4: Static Properties and Methods
// Create a class Calculator with the following static methods:
// - add(a: number, b: number): number – returns the sum of two numbers.
// - subtract(a: number, b: number): number – returns the difference between two numbers.
// Call these methods without creating an instance of the class.

// class Calculator {

//     add(a:number, b:number):number {
//         return a + b;
//     }

//     subtract(a:number, b:number):number {
//         return a - b;
//     }
// }

// const cal = new Calculator;
// console.log(cal.add(5, 5));
// console.log(cal.subtract(10, 5));


// Exercise 5: Extending Interfaces with Optional and Readonly Properties
// Create an interface User with properties id (readonly), name, and email. 
// Extend the User interface to create a PremiumUser interface with an additional optional 
// property membershipLevel. Create a function printUserDetails that accepts a PremiumUser and 
// logs the details to the console.

interface User {
    readonly id: number;
    name:string;
    email:string
}

class PremiumUser implements User {
    constructor(
        readonly id: number, 
        public name: string, 
        public email: string, 
        public membershipLevel?: string){}
    
    printUserDetails(){
        (this.membershipLevel) ? 
        console.log(`ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Membership Level: ${this.membershipLevel}`)
        : console.log(`ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`)
    }  
}

const user1 = new PremiumUser(1, 'John Doe', 'john.doe@example.com', 'Gold');
const user2 = new PremiumUser(2, 'Anna Doe', 'anna.doe@example.com');
user1.printUserDetails();
user2.printUserDetails();