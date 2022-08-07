let myLibrary = [];

const title = document.querySelector('#title');
let titleInput = "";

title.addEventListener('keydown', (e) => {
    return titleInput += e.key
});

const author = document.querySelector('#author');
let authorInput = '';

author.addEventListener('keydown', (e) => {
    return authorInput += e.key
});
const genre = document.querySelector('#genre');
let genreInput = '';

genre.addEventListener('keydown', (e) => {
    return genreInput += e.key
});
const pages = document.querySelector('#pages');
let pagesInput = '';

pages.addEventListener('keydown', (e) => {
    return pagesInput += e.key
});