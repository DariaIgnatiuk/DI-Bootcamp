// Exercise 1: Class Inheritance with Protected Access Modifiers

// class Employee {
//     protected name: string;
//     protected salary: number;
//     constructor(name: string, salary: number) {
//         this.name = name;
//         this.salary = salary;
//     }

//     getDetails():string  {
//         return `Name: ${this.name}, salary: ${this.salary}`
//     }
// }


// class Manager extends Employee {
//     public department:string;
//     constructor(name: string, salary: number, department: string) {
//         super(name, salary);
//         this.department = department;
//     }
//     getDetails():string  {
//         return `Name: ${this.name}, salary: ${this.salary}, department: ${this.department}`
//     }

// }

// const manager = new Manager('John Doe', 50000, 'IT');
// console.log(manager.getDetails()); 



// Exercise 2: Using Readonly with Access Modifiers

// class Car {
//     public readonly make: string;
//     private readonly model: string;
//     public year: number;
//     constructor(make: string, model: string, year: number) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     getCarDetails():string{
//         return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
//     }
// }

// const myCar = new Car('Toyota', 'Camry', 2020);
// // myCar.make = 'Kia' //error
// console.log(myCar.getCarDetails());



// Exercise 3: Static Properties and Methods in Classes

// class MathUtils {
//     static PI: number = 3.14;
//     static circumference(radius: number): number {
//         return 2 * MathUtils.PI * radius;
//     }
// }

// console.log(MathUtils.circumference(2)); 


// Exercise 4: Interface with Function Types

// interface Operation {
//     calculate(a: number, b:number): number;
// }

// class Addition implements Operation {
//     calculate(a: number, b: number): number {
//         return a + b;
//     }
// }

// class Multiplication implements Operation {
//     calculate(a: number, b: number): number {
//         return a * b;
//     }
// }

// const addition = new Addition();
// const multiplication = new Multiplication();

// console.log(addition.calculate(2, 3))
// console.log(multiplication.calculate(4, 5)); 


// Exercise 5: Extending Interfaces with Optional and Readonly Properties

interface Shape{
    color: string;
    getArea(): number;
}

interface Rectangle extends Shape {
    readonly width:number;
    readonly height:number;
    getPerimeter():number;
}

class RectangleImpl implements Rectangle {
    constructor(public color: string, public readonly width: number, public readonly height: number) {}
  
    getArea(): number {
      return this.width * this.height;
    }

    getPerimeter(): number {
        return 2*this.width + 2*this.height;
    }
  }

const rec = new RectangleImpl('white', 2, 3);
console.log(rec.getArea(), rec.getPerimeter());
