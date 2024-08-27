//  Exercise 1 : Find the numbers divisible by 23

// 1. Create a function call displayNumbersDivisible() that takes no parameter.
// 2. In the function, loop through numbers 0 to 500.
// 3. Console.log all the numbers divisible by 23.
// 4. At the end, console.log the sum of all numbers that are divisible by 23.
// 5. Bonus: Add a parameter divisor to the function.
// function displayNumbersDivisible(divisor){

//     let sum = 0;
//    let outcome = ''
//     for (let i = 0; i <= 500; i++){
//         if (i % divisor === 0){
//             //console.log(`Outcome: ${i}`);
//             outcome += i + ' '
//             sum += i;
//         }
//     }
//     console.log(`Outcome: ${outcome}`)
//     console.log(`Sum: ${sum}`);
// }

// displayNumbersDivisible(3);


// Exercise 2 : Shopping List

// 1. Add the stock and prices objects to your js file.
// 2. Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. 
// It means that you have 1 banana, 1 orange and 1 apple in your cart.
// 3. Create a function called myBill() that takes no parameters.
// 4. The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.
// 5. Call the myBill() function.
// 6. Bonus: If the item is in stock, decrease the item’s stock by 1

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  
// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":1088
// } 

// shoppingList = ['banana', 'orange', 'apple'];

// function myBill(){
//     let cost = 0;
//     for (i in shoppingList){
//         let object = shoppingList[i];
//         if (stock[object] != 0){
//             cost += prices[object];
//             stock[object] = stock[object] -1;
//         }
//     }
//     console.log(cost);
// }

// myBill();
// console.log(stock);


// Exercise 3 : What’s in my wallet ?

// function changeEnough(itemPrice, amountOfChange) {
//     let change = amountOfChange[0] * 0.25 + amountOfChange[1] * 0.1 + amountOfChange[2] * 0.05 + amountOfChange[3] * 0.01
//     if (change  < itemPrice){
//         return false
//     }
//     else {
//         return true
//     }
// }
// console.log(changeEnough(0.75, [0,0,20,5]))


// Exercise 4 : Vacations Costs

// function hotelCost(numberNights){
//     return numberNights * 140
// }

// function planeRideCost(destination) {
//     if (destination === 'London'){
//         return 183
//     }
//     else if (destination === 'Paris'){
//         return 220
//     }
//     else {
//         return 300
//     }
// }

// function rentalCarCost(numberDays){
//     let cost = numberDays * 40
//     if (numberDays > 10) {
//         cost = cost * 0.95
//     }
//     return cost
// }

// function totalVacationCost(){
//     let numberNights;
//     while (true) {
//         numberNights = prompt("For how many nights whould you like to stay in the hotel?");
//         numberNights = parseInt(numberNights); 
//         if (Number.isInteger(numberNights)) {
//             break;
//         }
//         else {
//             console.log("This in not a number. Try again.");
//             }
//     }
//     let costHotel = hotelCost(numberNights);
//     let destination;
//     while (true) {
//         destination = prompt("What is your destination?");
//         if ((typeof destination === "string") && (destination != '')){
//             break;
//         }
//         else {
//             console.log("This in not a string. Try again.");
//             }
//     }
//     let costPlane = planeRideCost(destination);
//     let numberDays;
//     while (true) {
//         numberDays = prompt("For how many days whould you like to rent a car?");
//         numberDays = parseInt(numberDays); 
//         if (Number.isInteger(numberDays)) {
//             break;
//         }
//         else {
//             console.log("This in not a number. Try again.");
//             }
//     }
//     let costCar = rentalCarCost(numberDays);
//     return costHotel + costPlane + costCar
// }

// console.log(totalVacationCost())
