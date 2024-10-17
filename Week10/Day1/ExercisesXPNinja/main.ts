// Exercise 1

// type MappedType<T extends number | string> = T extends  number ? number:number;

// const mapType = <T extends number | string>(value:T):MappedType<T> => {
//     if (typeof value === 'number') {
//         return value * value;
//       } else {
//         return value.length;
//       }
// }

// const numberResult = mapType(5);
// const stringResult = mapType("hello");

// console.log(numberResult); // Output: 25
// console.log(stringResult); // Output: 5


// Exercise 2

// const getProperty = <T extends object, K extends keyof T>(obj:T, key:K ):T[K] => {
//     return obj[key];
// }

// const person: { name: string; age: number } = {
//     name: 'Alice',
//     age: 30
//   };

// console.log(getProperty(person, 'name')); 
// console.log(getProperty(person, 'age'));



// Exercise 3

interface HasNumericProperty {
    [key: string]: number;
}

const multiplyProperty = <T extends HasNumericProperty>(obj:T, key: keyof T, factor:number) => {
    return obj[key] * factor;
}

const person: HasNumericProperty = {
    age: 30,
    height: 175
  };
  
  const multipliedAge = multiplyProperty(person, 'age', 2);
  const multipliedHeight = multiplyProperty(person, 'height', 1.5);
  
  console.log(multipliedAge); // Output: 60
  console.log(multipliedHeight); // Output: 262.5