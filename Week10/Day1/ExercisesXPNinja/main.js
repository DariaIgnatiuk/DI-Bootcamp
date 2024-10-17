// Exercise 1
var multiplyProperty = function (obj, key, factor) {
    return obj[key] * factor;
};
var person = {
    age: 30,
    height: 175
};
var multipliedAge = multiplyProperty(person, 'age', 2);
var multipliedHeight = multiplyProperty(person, 'height', 1.5);
console.log(multipliedAge); // Output: 60
console.log(multipliedHeight); // Output: 262.5
