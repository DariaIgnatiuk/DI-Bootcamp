let square = document.getElementById("animate");
let buttonClickMe = document.querySelector("button");

function squarePassing() {
    let start = Date.now();
    let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        square.style.left = timePassed / 1 + 'px';
        if (timePassed > 349) {
        clearInterval(timer);
        }
        }, 1);
}
  
buttonClickMe.addEventListener('click', squarePassing);