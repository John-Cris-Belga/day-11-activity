// Book Class
class Book {
  constructor(title, author, genre, availability = true) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.availability = availability;
  }

  borrowBook() {
    if (this.availability) {
      this.availability = false;
      console.log(`You have borrowed "${this.title}".`);
    } else {
      console.log(`"${this.title}" is currently not available.`);
    }
  }

  returnBook() {
    if (!this.availability) {
      this.availability = true;
      console.log(`You have returned "${this.title}".`);
    } else {
      console.log(`"${this.title}" was not borrowed.`);
    }
  }

  displayInfo() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Genre: ${this.genre}`);
    console.log(
      `Availability: ${this.availability ? "Available" : "Not Available"}`
    );
  }
}

// Library Class
class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author, genre) {
    const newBook = new Book(title, author, genre);
    this.books.push(newBook);
    console.log(`Added "${title}" to the library.`);
  }

  searchBook(title) {
    const book = this.books.find(
      (b) => b.title.toLowerCase() === title.toLowerCase()
    );
    if (book) {
      book.displayInfo();
    } else {
      console.log(`Book titled "${title}" not found.`);
    }
  }

  displayBooks() {
    console.log("Available books in the library:");
    this.books.forEach((book) => {
      if (book.availability) {
        console.log(`- ${book.title} by ${book.author}`);
      }
    });
  }
}

// Testing the Library Management System
const myLibrary = new Library();

// Adding books
myLibrary.addBook("The Hobbit", "J.R.R. Tolkien", "Fantasy");
myLibrary.addBook("1984", "George Orwell", "Dystopian");
myLibrary.addBook("To Kill a Mockingbird", "Harper Lee", "Fiction");

// Searching for a book
myLibrary.searchBook("1984");

// Borrowing a book
myLibrary.books[1].borrowBook();

// Attempting to borrow again
myLibrary.books[1].borrowBook();

// Returning a book
myLibrary.books[1].returnBook();

// Displaying available books
myLibrary.displayBooks();
