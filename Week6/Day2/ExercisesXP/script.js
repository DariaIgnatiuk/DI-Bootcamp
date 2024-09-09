// Exercise 1 : Giphy API

// const giphy = async () => {
//     try {
//       let res = await fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
//       let data = await res.json();
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
// };

// giphy();


// Exercise 2 : Giphy API

// const giphy = async () => {
//     try {
//     let res = await fetch("https://api.giphy.com/v1/gifs/search?q=sun&offset=2&limit=10&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
//     let data = await res.json();
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
// };

// giphy();

// Exercise 3 : Async function

// const asyncFunction = async() =>{
//     try {
//         let res = await fetch("https://www.swapi.tech/api/starships/9/");
//         let data = await res.json();
//         let objectStarWars = await data.result;
//         console.log(objectStarWars);
//     } catch (error) {
//         console.log(error);
//     }
// }

// asyncFunction();


// Exercise 4: Analyze
// Analyse the code provided below - what will be the outcome?
// Answer: calling and in 2 seconds resolved

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();