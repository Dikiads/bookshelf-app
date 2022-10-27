import RENDER_BOOKS from "./renderbook.js";
import books from "./bookArray.js";
import { saveData } from "./localStorage.js";

const generateID = () => {
    return +new Date();
};
const bookObject = (id, title, author, year, isComplete) => {
    return {
        id,
        title,
        author,
        year, 
        isComplete
    }
};
const addDataBook = ()=>{
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const check = document.getElementById('check');
    const isComplete = check.checked ? true : false;
    const id = generateID();
    const objectBook = bookObject(id, title, author, year, isComplete);
    books.push(objectBook);
    document.dispatchEvent(new Event(RENDER_BOOKS));
    saveData();
};

export default addDataBook;
