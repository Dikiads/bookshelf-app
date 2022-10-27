import swal from "sweetalert";
import books from "./bookArray.js";
import RENDER_BOOKS from "./renderbook.js";


const SAVED_EVENT = 'saved-book';
const STORAGE_KEY = 'bookshelf-app';

export function saveData() {
    if (isStorageExist()) {
      const parsed = JSON.stringify(books);
      localStorage.setItem(STORAGE_KEY, parsed);
      document.dispatchEvent(new Event(SAVED_EVENT));
    }
  };

export function isStorageExist() {
    if (typeof (Storage) === undefined) {
      swal('Browser kamu tidak mendukung local storage');
      return false;
    }
    return true;
  };
  document.addEventListener(SAVED_EVENT, function () {
    localStorage.getItem(STORAGE_KEY);
  });
export function loadDataFromStorage() {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    let data = JSON.parse(serializedData);
   
    if (data !== null) {
      for (const book of data) {
        books.push(book);
      }
    }
   
    document.dispatchEvent(new Event(RENDER_BOOKS));
  };

  