import './components/app-nav.js';
import './components/form-app.js';
import './components/ikhtisar-app.js';
import './components/container-form-app.js';
import './components/search-app.js';
import './components/modal-app.js';
import addDataBook from "./addBook.js";
import RENDER_BOOKS from "./renderbook.js";
import { saveData, isStorageExist, loadDataFromStorage } from "./localStorage.js";
import books from "./bookArray.js";
import makeBookshelf from "./makeBookshelf.js";

window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        addDataBook();
        clear();
    })
    if (isStorageExist()) {
        loadDataFromStorage();
      }
});
const clear = () => {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const year = document.getElementById('year');
    title.value='';
    author.value = '';
    year.value = '';
};

document.addEventListener(RENDER_BOOKS, function(){
    const unCompleteShelf = document.getElementById('uncompleteShelf');
    unCompleteShelf.innerHTML = '';
    const completeShelf = document.getElementById('completeShelf');
    completeShelf.innerHTML='';
    const count = document.querySelector('.count');
    count.innerText = books.length;
    const finish = document.querySelector('.finish');
    finish.innerText = books.filter(res => res.isComplete == true).length;
    const unfinish = document.querySelector('.unfinish');
    unfinish.innerText = books.filter(res => res.isComplete == false).length;
    for (let book of books) {
        const element = makeBookshelf(book);
        if(book.isComplete) {
            completeShelf.append(element);
        } else {
            unCompleteShelf.append(element);
        }
    }
});

const search = document.getElementById('search');
const btnSearch = document.getElementById('btnsearch');
const btnClear = document.getElementById('btnclear');
btnSearch.addEventListener('click', searching);
btnClear.addEventListener('click', ()=> {
    search.value = '';
    searching()
})
function searching(){
    const value = search.value;
    const datasBook = document.querySelectorAll('.data-buku')
    for(let dataBook of datasBook){
        if(!dataBook.childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerText.toLowerCase().includes(value.toLowerCase()) && !dataBook.childNodes[0].childNodes[1].childNodes[0].childNodes[1].innerText.toLowerCase().includes(value.toLowerCase()) && !dataBook.childNodes[0].childNodes[1].childNodes[0].childNodes[2].innerText.toLowerCase().includes(value.toLowerCase())) {
            dataBook.style.display='none';
        } else {
            dataBook.style.display = 'block';
        }
    }
}