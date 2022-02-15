
/* Book Constructor */
function Book(title, author, isbn) {
  this.title = title;
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
UI.prototype.clearFields = function () {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#isbn").value = "";
};

/* Event Listeners */
document.getElementById("book-form").addEventListener("submit", (e) => {
  // Get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  if (title === "" || author === "" || isbn === "") {
    alert ("Please fill all fields!");
  }  else {
  // Instance of book
    const book = new Book(title, author, isbn);

  // Instance of UI
  const ui = new UI();

  // Add book to list
  ui.addBookToList(book);

  // Clear fields
  ui.clearFields();
  }

  // Prevent actual submit
  e.preventDefault();
});


//examples
const potter = new Book("Harry Potter", "J. K. Rowling", 12345);

console.log(potter);