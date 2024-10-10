// Interface Book: Define an interface Book with the following properties:

// title (string)
// author (string)
// isbn (string)
// publishedYear (number)
// An optional genre property (string)

interface Book {
    title:string;
    author: string;
    isbn: string;
    publishedYear: number
    genre? :string
}

// Class Library: Create a class Library with:
// A private property books (array of Book).
// A public method addBook to add a new book to the library.
// A public method getBookDetails that returns details of a book based on the isbn.

class Library {
    private books:Book[]
    constructor(){
        this.books = [];
    }

    addBook(book:Book){
        this.books.push(book);
    }

    getBookDetails(isbn:string): Book | undefined {
        return this.books.find((book) => book.isbn === isbn);
    }

    getAllBooks() {
        return this.books;
    }
}

class DigitalLibrary extends Library {
    readonly website: string;
  
    constructor(website: string) {
      super();
      this.website = website;
    }
  
    listBooks(): string[] {
        const books = this.getAllBooks();
        return books.map(book => book.title);
    }
  }

  const myLibrary = new DigitalLibrary('https://example.com/library');

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
const bookDetails = myLibrary.getBookDetails('0345339700');
console.log(bookDetails); // Output: { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', isbn: '0345339700', publishedYear: 1954, genre: 'Fantasy' }

// List all book titles
const bookTitles = myLibrary.listBooks();
console.log(bookTitles); // Output: ['The Lord of the Rings', '1984']