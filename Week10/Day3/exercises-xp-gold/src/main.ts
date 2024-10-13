// Exercise 1

// interface User {
//   name:string,
//   email:string
// }

// interface Admin {
//   adminLevel: number
// }

// type AdminUser = User & Admin

// const getProperty = (obj: AdminUser, prop:string):string | number | undefined => {
//   if (prop in obj) return obj[prop as keyof AdminUser]
//   else return undefined
// }

// const object:AdminUser = {
//   name: 'John Doe',
//   email: 'johndoe@example.com',
//   adminLevel: 10
// }

// console.log(getProperty(object, 'name')) 
// console.log(getProperty(object, 'address')) 



// Exercise 2

// function castToType<T>(value: any, constructor: new () => T): T {
//   return new constructor();
// }

// // Examples:
// const stringToNumber: number = castToType("42", Number);
// const stringToBoolean: boolean = castToType("true", Boolean);

// console.log(stringToNumber); // Output: 42
// console.log(stringToBoolean); // Output: true


// Exercise 3

// const getArrayLength = <T extends number[] | string []>(arr: T): number => {
//   return arr.length;
// }

// console.log(getArrayLength([1,2,3]));
// console.log(getArrayLength(['a','b','c']));


// Exercise 4

// interface Storage<T> {
//   add(item: T): void;
//   get(index: number): T | undefined;
// }

// class Box<T> implements Storage<T> {
//   private items: T[] = [];

//   constructor() {
//     this.items = [];
//   }

//   add(item: T): void {
//       this.items.push(item);
//   }

//   get(index: number): T | undefined {
//     return this.items[index];
//   }
// }


// const stringBox = new Box<string>();
// stringBox.add("hello");
// stringBox.add("world");
// console.log(stringBox.get(0)); // Output: "hello"

// const numberBox = new Box<number>();
// numberBox.add(42);
// numberBox.add(100);
// console.log(numberBox.get(1)); // Output: 100



// Exercise 5

interface Item<T> {
  value: T;
}

class Queue <T> {
  public items: Item<T>[] = [];
  add (item:T):void {
    this.items.push({ value: item });
  }

  remove(item:T):void {
    const index = this.items.findIndex((i) => i.value === item);
    if (index!== -1) {
      this.items.splice(index, 1);
    }
  }
}

const queue = new Queue<number>();
queue.add(1);
queue.add(2);
queue.add(3);
queue.remove(2)
console.log(queue.items);

const queueStr = new Queue<string>();
queueStr.add('a');
queueStr.add('2');
queueStr.add('3');
queueStr.remove('a')
console.log(queueStr.items);

