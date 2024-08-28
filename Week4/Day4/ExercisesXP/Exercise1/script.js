// 1. Using a DOM property, retrieve the h1 and console.log it.

let elementH1 = document.querySelector('h1');
console.log(elementH1);

// 2. Using DOM methods, remove the last paragraph in the <article> tag.

let lastParagraph = document.querySelector('article').lastElementChild;
lastParagraph.remove()

// 3. Add an event listener which will change the background color of the h2 to red, 
// when it’s clicked on.

let elementH2 = document.querySelector('h2');

elementH2.addEventListener("click", h2RespondClick);

function h2RespondClick(e){
    elementH2.style.background = 'red';
}

// 4. Add an event listener which will hide the h3 when it’s clicked on 
//(use the display:none property).

let elementH3 = document.querySelector('h3');

elementH3.addEventListener("click", h3RespondClick);

function h3RespondClick(e){
    elementH3.style.display = 'none';
}

// 5. Add a <button> to the HTML file, that when clicked on, should make the text of all 
// the paragraphs bold.

let button = document.createElement('button');
button.setAttribute('class', 'myButton');
let elementArticle = document.querySelector('article');
elementArticle.append(button);
button.innerHTML = 'Click me!';

button.addEventListener('click', makeBold);

function makeBold(e){
    var bald = document.createElement("B");
    document.body.append(bald);
    bald.append(elementArticle);
}
// 6. BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.)

elementH1.addEventListener('mouseover', randomFontSize);

function randomFontSize(e){
    number = Math.floor(Math.random() * 101);
    elementH1.style.fontSize = `${number}px`;
}

// 7. BONUS : When you hover on the 2nd paragraph, it should fade out 

let elementP2 = document.querySelectorAll('p')[1];

elementP2.addEventListener("mouseover", () => {
    elementP2.style.opacity = "0.5";
});

elementP2.addEventListener("mouseout", () => {
    elementP2.style.opacity = "1";
});

