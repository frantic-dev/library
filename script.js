const title = document.querySelector('#title');
let titleInput = "";

title.addEventListener('keyup', () => {
    return titleInput = title.value;
});

const author = document.querySelector('#author');
let authorInput = '';

author.addEventListener('keyup', () => {
    return authorInput = author.value;
});
const genre = document.querySelector('#genre');
let genreInput = '';

genre.addEventListener('keyup', () => {
    return genreInput = genre.value;
});
const pages = document.querySelector('#pages');
let pagesInput = '';

pages.addEventListener('keyup', () => {
    return pagesInput =  pages.value;
});

const button = document.querySelector('#button');
const container = document.querySelector("#container");

button.addEventListener('click', () => {
    addBookToLibrary();
    let lastBook = myLibrary.length - 1;
    createDiv(myLibrary[lastBook]);
    hideForm();
})
 

let myLibrary = [];

function Book(title , author , genre , pages ) {
    this.title = title,
    this.author = author,
    this.genre = genre,
    this.pages = pages
}
function addBookToLibrary() {
    return myLibrary.push(new Book(titleInput, authorInput, genreInput, pagesInput))
}

function createDiv(book) {
    let div = document.createElement('div');
        div.innerHTML = `Title : ${book.title} <br>
        Author: ${book.author} <br>
        Genre: ${book.genre} <br>
        Pages: ${book.pages}`;
        
        container.appendChild(div);
}

const addBook = document.querySelector('button');
const form = document.querySelector('#form');

addBook.addEventListener('click' , showForm);

function showForm() {
    return form.setAttribute('style', "display:block; position: fixed; top:calc((100% - 280px)/2); left:calc((100% - 303px)/2)");
}

function hideForm() {
    return form.setAttribute('style', "display: none;")
}