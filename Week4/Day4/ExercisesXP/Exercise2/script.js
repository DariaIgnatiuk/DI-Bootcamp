//  Exercise 2 : Work with forms

// 1. Retrieve the form and console.log it.

let theForm = document.querySelector('form');
console.log(theForm);

// 2. Retrieve the inputs by their id and console.log them.

let firstNameInput = document.getElementById('fname');
console.log(firstNameInput);
let lastNameInput = document.getElementById('lname');
console.log(lastNameInput);
let submitInput = document.getElementById('submit');
console.log(submitInput);

// 3. Retrieve the inputs by their name attribute and console.log them.

let fnameByName = document.getElementsByName("firstname")[0];
console.log(fnameByName);
let lnameByName = document.getElementsByName("lastname")[0];
console.log(lnameByName);

// 4. When the user submits the form (ie. submit event listener)
// - use event.preventDefault(), why ?
// - get the values of the input tags,
// - make sure that they are not empty,
// - create an li per input value,
// - then append them to a the <ul class="usersAnswer"></ul>, below the form.

theForm.addEventListener('submit', addUserToList);
let unnumberesList = document.getElementsByClassName("usersAnswer")[0]

function validateInput(inputElement) {
    const inputValue = inputElement.value
    if (inputValue === "") {
        alert("Both first and last name should be filled in.");
        return false; 
    } else {
        return true; 
    }
}

function addUserToList(e){
    e.preventDefault()
    if (validateInput(firstNameInput) && validateInput(lastNameInput)){
        let newListItem = document.createElement('li');
        newListItem.textContent = `${firstNameInput.value} ${lastNameInput.value}`;
        unnumberesList.append(newListItem);
    }
}

