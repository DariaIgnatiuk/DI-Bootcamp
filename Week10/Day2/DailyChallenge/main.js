// Interface Book: Define an interface Book with the following properties:
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Class Library: Create a class Library with:
// A private property books (array of Book).
// A public method addBook to add a new book to the library.
// A public method getBookDetails that returns details of a book based on the isbn.
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.getBookDetails = function (isbn) {
        return this.books.find(function (book) { return book.isbn === isbn; });
    };
    Library.prototype.getAllBooks = function () {
        return this.books;
    };
    return Library;
}());
var DigitalLibrary = /** @class */ (function (_super) {
    __extends(DigitalLibrary, _super);
    function DigitalLibrary(website) {
        var _this = _super.call(this) || this;
        _this.website = website;
        return _this;
    }
    DigitalLibrary.prototype.listBooks = function () {
        var books = this.getAllBooks();
        return books.map(function (book) { return book.title; });
    };
    return DigitalLibrary;
}(Library));
var myLibrary = new DigitalLibrary('https://example.com/library');
// Add some books to the library
myLibrary.addBook({
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    isbn: '0345339700',
    publishedYear: 1954,
    genre: 'Fantasy'
});
myLibrary.addBook({
    title: '1984',
    author: 'George Orwell',
    isbn: '0451534852',
    publishedYear: 1949,
    genre: 'Dystopian'
});
// Get book details
var bookDetails = myLibrary.getBookDetails('0345339700');
console.log(bookDetails); // Output: { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', isbn: '0345339700', publishedYear: 1954, genre: 'Fantasy' }
// List all book titles
var bookTitles = myLibrary.listBooks();
console.log(bookTitles); // Output: ['The Lord of the Rings', '1984']
