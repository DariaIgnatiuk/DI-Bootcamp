// Retrieve the div and console.log it
 const divUsers = document.getElementsByTagName('div');
 console.log(divUsers);

// Change the name “Pete” to “Richard”.
let namePete = document.getElementsByClassName('list')[0].lastElementChild;
namePete.textContent = 'Richard';

// Delete the second <li> of the second <ul>.
document.getElementsByClassName('list')[1].getElementsByTagName('li')[1].remove()

// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
const firstLi = document.getElementsByClassName('list')[0];
for (let i = 0; i < 2; i++){
    firstLi.getElementsByTagName('li')[i].textContent = 'Daria';
}

// Add a class called student_list to both of the <ul>'s.
const studentList = document.getElementsByClassName('list');
for (let i = 0; i < 2; i++){
    studentList[i].classList.add('student_list');
}

// Add the classes university and attendance to the first <ul>.
document.getElementsByClassName('list')[0].classList.add('university', 'attendance');;

// Add a “light blue” background color and some padding to the <div>.
let divContainer = document.getElementById('container');
divContainer.style.background = 'lightblue';

// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
let dan = document.getElementsByClassName('list')[1].lastElementChild;
dan.style.display = 'none';

// Add a border to the <li> that contains the text node “Richard”. (the second 
//<li> of the <ul>)
let richard = document.getElementsByClassName('university')[0].lastElementChild;
richard.style.border = '1px solid black'

// Change the font size of the whole body.
document.body.style.fontSize = "20px";
