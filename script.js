let myLibrary = [];

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
    return pagesInput =  genre.value;
});

const button = document.querySelector('#button');
const container = document.querySelector("#container");
let div = document.createElement('div')

button.addEventListener('click', () => { 
    div.textContent = `${titleInput} is by the author ${authorInput}, of ${genreInput} genre. it is ${pagesInput} pages long.`;
    container.appendChild(div);
})
 