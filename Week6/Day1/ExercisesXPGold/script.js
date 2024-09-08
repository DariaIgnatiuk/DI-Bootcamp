// Exercise 1 : Promise.all()
// Promise.all() returns all the promises if all of them were resolved

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1,promise2, promise3]).then((result) =>{console.log(result)})


// Exercise 2 : Analyse Promise.all()
// Analyse the code below - what will be the output ?
// ANSWER: [2, 4, 6]

function timesTwoAsync(x) {
    return new Promise(resolve => resolve(x * 2));
  }
  
const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);
  
Promise.all(promiseArr)
    .then(result => {
      console.log(result);
    });