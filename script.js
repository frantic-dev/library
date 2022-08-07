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
    createCard(myLibrary[lastBook]);
    hideForm();
    resetForm();
});
 

let myLibrary = [];

function Book(title , author , genre , pages ) {
    this.title = title,
    this.author = author,
    this.genre = genre,
    this.pages = pages
};
function addBookToLibrary() {
    return myLibrary.push(new Book(titleInput, authorInput, genreInput, pagesInput))
};

function createCard(book) {
    let div = document.createElement('div');
        div.innerHTML = `Title : ${book.title} <br>
        Author: ${book.author} <br>
        Genre: ${book.genre} <br>
        Pages: ${book.pages}`;
        div.style.position = "relative";
        container.appendChild(div);
    let removeBtn = document.createElement('span');
        removeBtn.textContent = "X";
        removeBtn.setAttribute('style', 'position: absolute; right: 5px; top: 5px; cursor: pointer;')
        div.appendChild(removeBtn);
        removeBtn.addEventListener('click',() => div.remove())
};



const addBook = document.querySelector('button');
const form = document.querySelector('#form');

addBook.addEventListener('click' , showForm);

function showForm() {
    return form.setAttribute('style', "display:block; position: fixed; top:calc((100% - 280px)/2); left:calc((100% - 303px)/2)");
};

function hideForm() {
    return form.setAttribute('style', "display: none;")
};

function resetForm () {
    title.value = '';
    author.value = "";
    genre.value = '';
    pages.value = '';
    titleInput = "";
    authorInput = "";
    genreInput = "";
    pagesInput = "";
}