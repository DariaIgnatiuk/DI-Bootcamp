// Exercise 1

// class Employee {
//     constructor(public name: string, private age: number, protected salary: number) {}
//     protected calculateBonus():number{
//         return this.salary * 0.1;
//     }
// }

// class Manager extends Employee {
//     constructor(name: string, age: number, salary: number) {
//         super(name, age, salary);
//     }

//     getSalaryDetails():number{
//         return this.salary + this.calculateBonus();
//     }
// }

// class ExecutiveManager extends Manager {
//     constructor(name: string, age: number, salary: number) {
//         super(name, age, salary);
//     }

//     approveBudger(amount: number):void{
//         console.log(`Executive Manager ${this.name} approved a budget of ${amount}`);   
//     }
// }

// const ex = new ExecutiveManager('John', 55, 10000);
// console.log(ex.name);
// // console.log(ex.calculateBonus()); //error
// console.log(ex.getSalaryDetails());
// ex.approveBudger(50000);


// Exercise 2

// class Shape {
//     static totalShapes : number = 0;
// }

// class Circle extends Shape {
//     public radius: number;
//     constructor(radius: number){
//         super();
//         this.radius = radius;
//         Shape.totalShapes ++;
//     }

//     getType():string { return "Circle"; }

//     area():number {
//         return Math.PI * this.radius * this.radius;
//     }
// }


// class Square extends Shape {
//     constructor(public side: number) {
//       super();
//       Shape.totalShapes++;
//     }

//     getType():string { return "Square"; }
  
//     area(): number {
//       return this.side * this.side;
//     }
//   }

// const circle = new Circle(5);
// console.log(circle.getType(), circle.area());
// const sqare = new Square(5);
// console.log(sqare.getType(), sqare.area());
// console.log("Total shapes created: ", Shape.totalShapes);


// Exercise 3

// interface Calculator {
//     a:number;
//     b:number;
//     operate(operation:(x:number, y:number) => number ):number;
// }

// class AdvancedCalculator implements Calculator {
    
//     constructor(public a: number, public b: number) {}

//     operate(operation: (x: number, y: number) => number): number {
//         return operation(this.a, this.b);
//     }

//     add():number {
//         return this.operate((x,y) => x + y);
//     }

//     substrace():number {
//         return this.operate((x,y) => x - y);
//     }

//     multiply():number {
//         return this.operate((x,y) => x * y);
//     }
// }

// const calc = new AdvancedCalculator(5, 3);
// console.log(calc.add(), calc.substrace(), calc.multiply());


// Exercise 4

// class Device {
//     constructor (public readonly serialNumber: string){}

//     getInfo():string{
//         return `Serial Number: ${this.serialNumber}`;
//     }
// }

// class Laptop extends Device {
//     constructor(public readonly serialNumber: string, public  model: string, public  price: number){
//         super(serialNumber);
//     }

//     getInfo():string{
//         return `${super.getInfo()}, Model: ${this.model}, Price: $${this.price}`;
//     }
// }

// const laptop = new Laptop('ABC123', 'Macbook Pro', 1500);
// console.log(laptop.getInfo());


// Exercise 5

interface Product {
    readonly name: string;
    price: number;
    discount?: number;
}

interface Electronics extends Product {
    warrantyPeriod:string;
}

class Smartphone implements Electronics{
    constructor(public readonly name: string, public price: number, public warrantyPeriod: string, public discount? : number){
    }

    getPrice(): number {
        if (this.discount) return this.price * this.discount;
        else return this.price;
    }
}

const smartphone = new Smartphone('iPhone 12', 1000, '2 years', 0.9);
console.log(smartphone.getPrice());
// smartphone.name = 'iPhone' //error