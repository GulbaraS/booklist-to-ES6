// article about static
//https://learn.javascript.ru/static-properties-methods



/* Book Constructor */
function Book(name, author, isbn) {
  this.name = name;
  this.author = author;
  this.isbn = isbn;
};


/* UI Constructor  */
function UI() {}

/* UI Prototype Methods */
UI.prototype.addBookToList = function (book) {
  // Find the table
  const list = document.querySelector("#book-list");

  // Create tr element
  const row = document.createElement("tr");

  // Insert cols
  row.innerHTML =
    `<td>${book.title}</td>
     <td>${book.author}</td>
     <td>${book.isbn}</td>`;

  // Append to table
  list.appendChild(row);
};

// Clear fields
UI.prototype.clearFields = function () {};

/* Event Listeners */
document.getElementById("book-form").addEventListener("submit", (e) => {
  // Get form values
  // Instance of book
  // Instance of UI
  // Add book to list
  // Clear fields

  // Prevent actual submit
  e.preventDefault();
});


//examples
const potter = new Book("Harry Potter", "J. K. Rowling", 12345);

console.log(potter);