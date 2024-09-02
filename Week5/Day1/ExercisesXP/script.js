// Exercise 1 : Scope

// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne()
// ANSWER: the outcome will be 3 because let allows reassigning variables
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// ANSWER: the outcome will be 5, because const variable cannot be changed
// I was wrong - it throws an error


//#2
// const a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     // alert(`inside the funcThree function ${a}`);
//     console.log(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()

// ANSWER: 0 and then 5
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// ANSWER: same here - error


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()

// //ANSWER: window.a = globally declared variable, so the outsome is 
// // inside the funcFive function hello

//#4
// const a = 1;
// function funcSix() {
//     const  a = "test";
//     // alert(`inside the funcSix function ${a}`);
//     console.log(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()
//ANSWER: inside the funcSix function test because let a = "test" is local scope and it 
// it not redeclaring the first a
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// ANSWER: the outcome will be the same

//#5
// const a = 2;
// if (true) {
//     const a = 5;
//     // alert(`in the if block ${a}`);
//     console.log(`in the if block ${a}`);
// }
// // alert(`outside of the if block ${a}`);
// console.log(`outside of the if block ${a}`);

// #5.1 - run the code in the console
//ANSWER: in the if block 5, outside of the if block 2.
// those are 2 separate variables named the same with different scope
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// ANSWER: the outcome will be the same


// Exercise 2 : Ternary operator
// 1. Transform the winBattle() function to an arrow function.
// 2. Create a variable called experiencePoints.
// 3. Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints 
// variable should be equal to 10, else the variable should be equal to 1.
// 4. Console.log the experiencePoints variable.

// function winBattle(){
//     return true;
// }

// let winBattle = () => true;

// let experiencePoints;
// winBattle ? experiencePoints = 10: experiencePoints = 1;

// console.log(experiencePoints);


// Exercise 3 : Is it a string ?

// let isString = (something) => typeof something === "string" ? true : false;
// console.log(isString('hello')); 
// console.log(isString([1, 2, 4, 0]));


// Exercise 4 : Find the sum

// let sum = (num1, num2) => num1 + num2;
// console.log(sum(1,2));


// Exercise 5 : Kg and grams
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// 1. First, use function declaration and invoke it.
// function kgToGr(number){
//     return number * 1000;
// }

// 2. Then, use function expression and invoke it.
// const kgToGr = function(number){
//     return number * 1000;
// }

// 3. Write in a one line comment, the difference between function declaration and function expression.
// To call a function stored in a variable you don't need a function name, just a variable name


// 4. Finally, use a one line arrow function and invoke it.
// const kgToGr = (number) => number * 1000;

// console.log(kgToGr(3));


// Exercise 6 : Fortune teller

// (function (numberOfChildren, partnersName, location, jobTitle){
//     console.log(`You will be a ${jobTitle} in ${location}, and married to ${partnersName} with ${numberOfChildren} kids.`)
// })(2, 'Sam', 'Seoul', 'developer');


// Exercise 7 : Welcome

// const navbar = document.getElementById('navigation');

// (function (name){
//     welcomeUser = document.createElement('div');
//     welcomeUser.innerText = `Welcome, ${name}`;
//     navbar.append(welcomeUser);
//     welcomeUserPic = document.createElement('img');
//     welcomeUserPic.setAttribute('src','https://cdn.vectorstock.com/i/1000v/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg');
//     welcomeUserPic.setAttribute('height', 100);
//     navbar.append(welcomeUserPic);
// })('John')


//  Exercise 8 : Juice Bar

// Part I:
// 1. The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// 2. The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a 
// <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// 3. Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

// let nav = document.getElementById('navigation');

// function makeJuice(size){
//     function addIngredients(first, second,third){
//         return `<div>The client wants a ${size} juice, containing ${first}, ${second}, ${third}</div>`;        
//     }
//     return addIngredients('pineapple', 'mango', 'rum');
// }

// nav.innerHTML = makeJuice('large');



// Part II:
// 1. In the makeJuice function, create an empty array named ingredients.

// 2. The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// 3. Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// 4. The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

function makeJuice(size){
    let ingredients = [];

    function addIngredients(first, second, third){
        ingredients.push(first, second, third);
    };

    function displayJuice(){
        let ingredientsList = '';
        for (i = 0; i < ingredients.length -1; i++) {
            ingredientsList += ingredients[i] + ', ';
        }
        ingredientsList += ingredients[ingredients.length - 1];
        document.getElementById('navigation').innerHTML = `<div>The client wants a ${size} juice, containing ${ingredientsList}</div>`;
    };
    
    addIngredients('pineapple', 'mango', 'rum');
    addIngredients('salary', 'cucumber', 'apple');
    displayJuice();
}

makeJuice('large');