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

const bookContainer = document.querySelector("#book-container");

let booksInLibrary = "";

let myLibrary = [];

class Book {
    constructor (title, author, genre , pages) {
        this.title = title,
        this.author = author,
        this.genre = genre,
        this.pages = pages,
        this.read = "not read"
    }
}

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
        bookContainer.appendChild(div);

    booksInLibrary = document.querySelectorAll('div>div');
    booksInLibrary = [...booksInLibrary];

    let removeBtn = document.createElement('span');
        removeBtn.textContent = "X";
        removeBtn.setAttribute('style', 'position: absolute; right: 5px; top: 5px; cursor: pointer;')
        div.appendChild(removeBtn);
        removeBtn.addEventListener('click',() => {
            let indexOfRemoved = booksInLibrary.indexOf(div);
            div.remove();
            removeBook(myLibrary, indexOfRemoved);
            removeBook(booksInLibrary, indexOfRemoved);
        });

    let read = document.createElement('button');
        read.textContent = "Not Read";
        read.setAttribute('style', "background-color: rgb(255, 123, 123); display: block; margin-top: 10px; padding: 5px 10px; position: absolute; bottom: 10px; right: 10px;");
        div.appendChild(read);
        read.addEventListener('click', () => {
            read.textContent = 'Read';

            if(read.style.backgroundColor === 'rgb(255, 123, 123)') read.style.backgroundColor = 'rgb(45, 255, 80)';
            else {
                read.textContent = "Not read"
                read.style.backgroundColor = 'rgb(255, 123, 123)'
            }
            let divBtnIndex = booksInLibrary.indexOf(div);
            updateReadStatus(myLibrary, divBtnIndex, read.textContent)
            console.log(myLibrary)
        })
};
function updateReadStatus(array, index, status) {
    return array[index].read = status;
}

function removeBook(array,index) {
    return array.splice(index , 1);
}

const addBook = document.querySelector('#add-book-btn');
const form = document.querySelector('form');

addBook.addEventListener('click' , showForm);

function showForm() {
    return form.setAttribute('style',"display:block");
};

function hideForm() {
    return form.setAttribute('style', "display: none;")
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
    let lastBook = myLibrary.length - 1;
    createCard(myLibrary[lastBook]);
    hideForm();
    form.reset()
});
