let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

//1. Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

const displayGroceries = fruits => {fruits.forEach(fruit => console.log(fruit))};

displayGroceries(groceries.fruits);

//2. Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// ANSWER: No, user variable will remain 'John', because strings are passed by value

// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?
// ANSWER: Yes, because objects are passed by reference

const cloneGroceries = groceries => {
    let user = client;
    client = 'Betty';
    let shopping = groceries;
    groceries.totalPrice = "35$";
    groceries.other.paid = false;
    console.log(groceries);
    console.log(shopping);
}

cloneGroceries(groceries);
console.log(client);
