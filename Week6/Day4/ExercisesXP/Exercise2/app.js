import {people} from './data.js'

const averageAge = () => {
    let age = 0;
    for (const person of people){
        age += person.age;
    };
    return age / people.length;
}

console.log(averageAge());
