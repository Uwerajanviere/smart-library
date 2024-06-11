const myLibrary = [];


function Book(title,author,pages,read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages= pages;
  this.read = read;
}

Book.prototype.toggleRead = function(){
  this.read = !this.read;
}
function toggleRead(index){
  myLibrary[index].toggleRead();
  render();
}


function render(){
  let libraryEl= document.querySelector("#library");
  libraryEl.innerHTML = "";
  for ( let i=0;i<myLibrary.length;i++){
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.innerHTML = `
     <div class="card">
 <div class="card-body">
    <h3 class="card-title">${book.title}</h3>
    <h5 class="card-title">${book.author}</h5>
    
    <p class="card-text">${book.pages}</p>
    <p class="read-status">${book.read ? "read" : "not yet"}</p>
    <button class="remove-btn" onclick="removeBook(${i})">remove</button>
    <button class="toggle-read-btn" onclick="toggleRead(${i})">toggle</button>
  </div>
    </div>
    
  

    `;
    libraryEl.appendChild(bookEl);
  }
 
}

function removeBook(index){
  myLibrary.splice(index, 1);
  render();
}

function addBookToLibrary() {
  let title= document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages= document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
let newbook = new Book(title,author,pages,read);
myLibrary.push(newbook);
render();
}

let newBookButton = document.querySelector("#new-book-button")
newBookButton.addEventListener("click",
  function(){
   
    let newBookForm = document.querySelector("#new-book-form");
   
    newBookForm.style.display = "block";
  }
)

document.querySelector("#new-book-form").addEventListener("submit",function(event){
  event.preventDefault();
  addBookToLibrary();
})