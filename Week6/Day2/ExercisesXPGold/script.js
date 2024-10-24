// Exercise 1 : Giphy API #2

// const giphy = async () => {
//     try {
//       let res = await fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
//       let data = await res.json();
//       const status = data.meta.status;
//       if (status === 200) {
//         document.getElementById('gif').innerHTML = `<img src="${data.data[1].images.original.url}"/>`
//       }
//     } catch (error) {
//       console.log(error);
//     }
// };

// giphy();




// Exercise 2 : Analyze #2

// Analyse the code provided below - what will be the outcome?
// ANSWER: 
// ==SEQUENTIAL START==
// starting slow promise
// slow promise is done
// slow
// starting fast promise
// fast promise is done
// fast

// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// let sequentialStart = async function () {
//     console.log('==SEQUENTIAL START==');
//     const slow = await resolveAfter2Seconds();
//     console.log(slow);
//     const fast = await resolveAfter1Second();
//     console.log(fast);
// }

// sequentialStart()


// Exercise 3 : Analyze #3
// Analyse the code provided below - what will be the outcome?
// ANSWER
// ==CONCURRENT START with await=='
// starting slow promise
// starting fast promise
// slow promise is done
// fast promise is done
// slow
// fast


// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// let concurrentStart = async function () {
//     console.log('==CONCURRENT START with await==');
//     const slow = resolveAfter2Seconds();
//     const fast = resolveAfter1Second();
//     console.log(await slow);
//     console.log(await fast);
// }

// setTimeout(concurrentStart, 4000)


//Exercise 4 : Modify fetch with Async/Await

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
  ];
  
  const getData = async function() {
      const [users, posts, albums] = await Promise.all(
        urls.map(async url => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                return data;
                
            } catch (error) {
                console.error('ooooooops:',error);
            }

        })
      );
      console.log('users', users);
      console.log('posts', posts);
      console.log('albums', albums);
  };
  
  getData();