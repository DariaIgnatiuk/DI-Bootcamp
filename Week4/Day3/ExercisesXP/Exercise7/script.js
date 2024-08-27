// Exercise 7 : My Book List

let book1  = {
    title: "Harry Potter and the Order of Phoenix",
    author: "J.K.Rowling",
    image : 'https://m.media-amazon.com/images/I/71pgI2ou5oL._AC_UF1000,1000_QL80_.jpg',
    alreadyRead : true
}

let book2  = {
    title: "A Little Life",
    author: "Hanua Yanagihara",
    image : 'https://m.media-amazon.com/images/I/51Ek1NTr-bL._SL500_.jpg',
    alreadyRead : true
}

let allBooks = [book1, book2];

let bookSection = document.getElementsByClassName("listBooks")[0];
let bookList = document.createElement('ul');
bookSection.append(bookList);
//first book
let bookElement1 = document.createElement('li');
bookElement1.textContent = `"${book1.title}" by ${book1.author}`;
bookList.append(bookElement1);
let book1Img = document.createElement('img');
book1Img.src = book1.image;
book1Img.width = 100;
book1Img.height = 150;
bookElement1.append(book1Img);
if (book1.alreadyRead) {
    bookElement1.style.color = 'red';
}

// second book

let bookElement2 = document.createElement('li');
bookElement2.textContent = `"${book2.title}" by ${book2.author}`;
bookList.append(bookElement2);
let book2Img = document.createElement('img');
book2Img.src = book2.image;
book2Img.width = 100;
bookElement2.append(book2Img);
if (book2.alreadyRead) {
    bookElement2.style.color = 'red';
}
// i know i could do it in the loop but Java Script is new and super challenging for me
// so i decided to do it one book at a time 
