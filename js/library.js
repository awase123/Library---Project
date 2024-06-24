/* Step 02: Create the Book Constructor */

// Book Constructor:
class Book {
  constructor(title, author, read = false) {
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

/* Step 03: Create the Library Array and Display Function */

// Library Array:
const library = [];

// LibraryDiv:
const libraryDiv = document.getElementById("bookHolder");

// New Div Array:
let bookDivs = [];

/* Step 04: Add Books to the Library */

// Display Function:
const displayBooks = () => {
  // Clear libraryDiv to prevent duplicate entries:
  libraryDiv.innerHTML = "";

  // Clear the bookDivs to prevent duplicate entries:
  bookDivs = [];

  // Iterate through each book in the library array:
  library.forEach((book, index) => {
    // Create a new Div:
    let newDiv = document.createElement("div");

    // Assign a class to newDiv:
    newDiv.classList.add("bookDiv")

    // Give new Div text basked on the input from the DOM:
    newDiv.textContent = `${book.title} by ${book.author}`;

    // Add attributes to each new div
    newDiv.setAttribute("data-title", index);

    // Create a new button element to remove book:
    let bookButton = document.createElement("button");

    // Create a new button element for read status:
    let readStatusButton = document.createElement("button")

    // Set the remove book button's text content to a label:
    bookButton.textContent = "-";

    // Set the read status' button text content to a label:
    readStatusButton.textContent = book.read ? "Read" : "Unread";

    // Assign a class to the remove button:
    bookButton.classList.add("book-button");

    // Assign a class to the read status button:
    readStatusButton.classList.add("read-status-button")

    // Add event listener to remove book:
    bookButton.addEventListener("click", () => removeBook(index));

    // Add event listener to read status:
    readStatusButton.addEventListener("click", () => readStatus(index))

    // Append remove button to the newDiv:
    newDiv.appendChild(bookButton);

    // Append read status button to the newDic:
    newDiv.appendChild(readStatusButton);

    // Append newDiv to the libraryDiv:
    libraryDiv.appendChild(newDiv);

    // Add newDiv into the bookDivs array:
    bookDivs.push(newDiv);
  });
};

// Add Book to Library:
const addBookToLibrary = (book) => {
  library.push(book);
};

// Form Submit Hanlder:
const handleFormSubmit = (event) => {
  // Add preventDefault method to prevent page from reloading:
  // Prevents the default form submission action, ensuring the page does not reload.
  event.preventDefault();

  // Retrieve title value from DOM:
  const title = document.getElementById("title").value;

  // Retrieve author value from DOM:
  const author = document.getElementById("author").value;

  // Add new book to DOM:
  const newBook = new Book(title, author);
  addBookToLibrary(newBook);

  // Update the display:
  displayBooks();

  // Reset form fields after submission:
  // Used to clear form fields after text is submitted/
  document.getElementById("bookForm").reset();
};

// Create a function to delete book from div:
// Add index paramater to function:
const removeBook = (index) => {
  // Use splice method to delete book:
  library.splice(index, 1);

  // Reset the page:
  displayBooks();
};

// Create a function to alter read status from div:
const readStatus = (index) => {
  library[index].read = !library[index].read;
  displayBooks();
}

/* Step 05: Event Listener Functions */

// Show Book Form Function:
const showBookForm = () => {
  // Add styling to show the input fields after button is pressed:
  document.getElementById("bookForm").style.display = "block";
};

// // Delete Last Book Function:
// const deleteLastBook = () => {
//   // Create if statement and a way to delete the last book:
//   if (library.length > 0) {
//     library.pop();
//     displayBooks();
//   }
// };

// Clear List Function:
const clearBookList = () => {
  library.length = 0;
  displayBooks();
};

/* Step 06: Event Listeners */

// Show Book Form:
document.getElementById("addBook").addEventListener("click", showBookForm);

// Form Submission:
document
  .getElementById("bookForm")
  .addEventListener("submit", handleFormSubmit);

// // Delete Last Book:
// document
//   .getElementById("deleteLastBook")
//   .addEventListener("click", deleteLastBook);

// Clear List:
document.getElementById("clearList").addEventListener("click", clearBookList);
