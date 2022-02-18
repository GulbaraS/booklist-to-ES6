
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
  const list = document.getElementById("book-list");

  // Create tr element
  const row = document.createElement("tr");

  // Insert cols
  row.innerHTML =
    `<td>${book.title}</td>
     <td>${book.author}</td>
     <td>${book.isbn}</td>
     <td><a href = "#" class = "delete">X</a></td>`;

  // Append to table
  list.appendChild(row);
};

//show Alert
UI.prototype.showAlert = function (msg, className) {
  //create alert div
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(msg));

  //find place for alert div
  const container = document.querySelector(".container");
  const form = document.querySelector("#book-form");

  //palce alert div
  container.insertBefore(div, form);

  //set time for alert
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

// Clear fields
UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};


// delete books method
UI.prototype.deleteBook = function(el) {
  if (el.classList.contains("delete")) {
    const ui = new UI();
    ui.showAlert("Book deleted", "delete-msg");
    el.parentElement.parentElement.remove();
  }
};

// event listener to delete book
document.querySelector("#book-list").addEventListener("click", (el) => {
 const ui = new UI();
 ui.deleteBook(el.target);
 
});


/* Event Listeners */
document.getElementById("book-form").addEventListener("submit", (e) => {
  // Get form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  //create new book
  const book = new Book(title, author, isbn);

  // Instance of UI
  const ui = new UI();

  //validate
  if (title === "" || author === "" || isbn === "") {
   
   ui.showAlert("Please fill in all fields!", "error");    
    } 
    //validate isbn is number and 8 digits
   else if(isNaN(isbn)) {
     ui.showAlert("ISBN must be a number", "error");
    document.getElementById("isbn").value = "";
   } else if(isbn.length != 8) {
     ui.showAlert("ISBN must have 8 digits", "error");
     document.getElementById("isbn").value = "";
   } else {

    // Add book to list
   ui.addBookToList(book);
   ui.showAlert("Book added", "success");
  
   // Clear fields
  ui.clearFields();
  }

   // Prevent actual submit
  e.preventDefault();

 });

  
 

