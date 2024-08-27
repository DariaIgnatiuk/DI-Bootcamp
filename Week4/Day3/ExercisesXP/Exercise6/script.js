// Using Javascript, in the <div>, change the value of the id attribute 
// from navBar to socialNetworkNavigation, using the setAttribute method.

let navBar = document.getElementById("navBar");
navBar.setAttribute('id', 'socialNetworkNavigation');

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method)

let newLi = document.createElement('li');

// Create a new text node with “Logout” as its specified text.

let newTextNode = document.createTextNode('Logout');

// Append the text node to the newly created list node (<li>).

newLi.appendChild(newTextNode);

// Finally, append this updated list node to the unordered list (<ul>), 
// using the appendChild method.

list = document.querySelector('ul');
list.appendChild(newLi);

// Use the firstElementChild and the lastElementChild properties to retrieve 
// the first and last <li> elements from their parent element (<ul>). 
// Display the text of each link. (Hint: use the textContent property).

list.firstElementChild.textContent
list.lastElementChild.textContent