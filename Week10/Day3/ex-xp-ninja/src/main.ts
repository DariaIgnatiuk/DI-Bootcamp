// Exercise 1

// class Container <T> {
//   private items: T[] = [];

//   add(item: T): void {
//     this.items.push(item);
//   }

//   remove(item: T): void {
//     const index = this.items.indexOf(item);
//     if (index!== -1) {
//       this.items.splice(index, 1);
//     }
//   }

//   listItems(): void {
//     console.log(this.items);
//   }
// }

// const container = new Container<string>();
// container.add('apple');
// container.add('banana');
// container.add('orange');
// container.listItems(); // Output: ['apple', 'banana', 'orange']
// container.remove('banana');
// container.listItems(); // Output: ['apple', 'orange']


// Exercise 2

// interface Response<T> {
//   data:T;
//   status: number;
// } 

// const parseResponce = <T>(response: Response<T>):T => {
//   if (response.status >= 200 && response.status < 300) {
//     return response.data;
//   } else {
//     throw new Error(`Error fetching data: ${response.status}`);
//   }
// }

// const res: Response<string> = {
//   data:  'hi there',
//   status: 200
// }

// const res2: Response<number> = {
//   data:  1234,
//   status: 200
// }

// console.log(parseResponce(res));
// console.log(parseResponce(res2));


// Exercise 3

class Repository <T>{
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  get(item: T): number | undefined {
    if (this.items.includes(item)) return this.items.indexOf(item);
      else return undefined
  }

  listItems(): T[] {
    return this.items;
  }

}

const repo = new Repository<string>();
repo.add('apple');
repo.add('banana');
repo.add('orange');
console.log(repo.listItems()); // Output: ['apple', 'banana', 'orange']
console.log(repo.get('banana')); // Output: 1