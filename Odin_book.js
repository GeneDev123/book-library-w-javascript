// Object contructor for creating books 
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = (read)? "have read.": "have not read.";
}
// Returns the Book description 
Book.prototype.info = function(){
    return (this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read);
}
// Add book to the library
function addBook(){
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    let read = document.getElementById("r1").checked;
    
    let book = new Book(title.value, author.value, pages.value, read);
    
    // Go to diplayLib() function and display the library. 
    displayLib(book);
}
// Displays the library by connecting the elements with appendChild()
function displayLib(newBook){
    let lib = document.getElementById("library");
    let newEntry = document.createElement("tr")
    newEntry.classList.add("entry");

    // Go to ccreateRow() to create a row entry.
    let items = createRow(newBook);
    
    newEntry.appendChild(items[0]);
    newEntry.appendChild(items[1]);
    newEntry.appendChild(items[2]);

    lib.appendChild(newEntry);
}
// Further organizes the elements in the table.
function createRow(newBook){
    let book_node = document.createTextNode(newBook.info());
    let status_node = document.createTextNode(newBook.read);
    let but_name = document.createTextNode("Remove");
    
    let rem = document.createElement("button");
    rem.appendChild(but_name);
    rem.classList.add("rem");

    let book = document.createElement("td");
    let status = document.createElement("td");
    let rem_button = document.createElement("td")
    
    book.appendChild(book_node);
    status.appendChild(status_node);
    rem_button.appendChild(rem);
    
    // Event listener for removing a row with remove button.
    rem_button.addEventListener("click",function(){
        rem_button.parentElement.remove();
    });

    return [book, status, rem_button];
}