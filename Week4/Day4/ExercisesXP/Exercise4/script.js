// Exercice 4 : Volume of a sphere

let radius = document.getElementById("radius");
const pi = 3.14159265359;
let volume = document.getElementById("volume");

let button = document.getElementById('submit');
button.addEventListener('click', calculate);

function validateInput(inputElement) {
    const inputValue = inputElement.value
    if (inputValue === "") {
        alert("Radius should be filled in");
        return false; 
    } else {
        return true; 
    }
}

function calculate(e){
    e.preventDefault()
    if (validateInput(radius)) {
        let radiusPower = Math.pow(radius.value, 3);
        let volume_result = 4 / 3 * pi * radiusPower; 
        volume.value = volume_result;
    }
}

