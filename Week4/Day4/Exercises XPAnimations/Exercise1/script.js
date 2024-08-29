// Part I
// 1. In your Javascript file, using setTimeout, call a function after 2 seconds.
// 2. The function will alert “Hello World”.

function sayHi() {
    alert( "Hello World" );
  }
  
setTimeout(sayHi, 2000); 

// Part II
// 1. In your Javascript file, using setTimeout, call a function after 2 seconds.
// 2. The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
  
let divContainer = document.getElementById('container');

function addParagraph() {
    let paragraph = document.createElement('p');
    paragraph.innerHTML= "Hello World";
    divContainer.append(paragraph);
  }
  
setTimeout(addParagraph, 2000); 

// Part III
// 1. In your Javascript file, using setInterval, call a function every 2 seconds.
// 2. The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// 3. The interval will be cleared (ie. clearInterval), when the user will click on the button.
// 4. Instead of clicking on the button, the interval will be cleared (ie. clearInterval) 
// as soon as there will be 5 paragraphs inside the <div id="container">.

let counter = 0;

let timer = setInterval(function() {
    if (counter < 5) {
        let paragraph = document.createElement('p');
        paragraph.innerHTML= "Hello World";
        divContainer.append(paragraph);
        counter ++;
    } 
}, 2000);

let button = document.getElementById("clear");

function myStopFunction() {
    clearInterval(timer);
  }

button.addEventListener('click', myStopFunction);
