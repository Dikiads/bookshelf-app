import swal from "sweetalert";
import { saveData } from "./localStorage.js";
import RENDER_BOOKS from "./renderbook.js";
import books from "./bookArray.js";


const addTocomplete = (idBook) => {
    const bookTarget = findBook(idBook);
    if (bookTarget === null) return;

    bookTarget.isComplete = true;
    document.dispatchEvent(new Event(RENDER_BOOKS))
    saveData();
};

const undoFromComplete = (idBook) => {
    const bookTarget = findBook(idBook);
    if (bookTarget === null) return;

    bookTarget.isComplete = false;
    document.dispatchEvent(new Event(RENDER_BOOKS))
    saveData();
};

const findBook = idBook => {
    for(const bookItem of books) {
        if(bookItem.id === idBook){
            return bookItem;
        }
    }
    return null;
};

const removeBook = idBook => {
    const targetBook = findIndexBook(idBook);
    if (targetBook === -1) return;
    books.splice(targetBook, 1);
    document.dispatchEvent(new Event(RENDER_BOOKS));
    saveData();
};

const findIndexBook = (idBook) => {
    for (const index in books) {
        if(books[index].id === idBook) {
            return index;
        }
    }
    return -1;
};

const modal = document.querySelector('.editmodal');
const span = document.getElementsByClassName("close-button")[0];
span.onclick = function() {
    modal.style.display = "none";
  }
// window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }
const editData = (idBook) => {
    const bookTarget = findBook(idBook);
    if(bookTarget === null) return;

    const title = document.getElementById('edittitle');
    const author = document.getElementById('editauthor');
    const year = document.getElementById('edityear');
    const save = document.getElementById('save');
            
    title.value = bookTarget.title; 
    author.value = bookTarget.author;
    year.value= bookTarget.year;
    save.addEventListener('click', () => {
                modal.style.display = "none";

                bookTarget.title = title.value
                bookTarget.author = author.value
                bookTarget.year = year.value
                document.dispatchEvent(new Event(RENDER_BOOKS))
                saveData();
                swal("Buku anda berhasil diedit!", {
                    icon: "success",
                  })
               
            })
            
}
const makeBookshelf = (dataBook) => {
    const {id, title, author, year, isComplete} = dataBook;
    
    const textTitle = document.createElement('h5');
    textTitle.innerText = title;
    textTitle.classList.add('card-title')
    
    const textAuthor = document.createElement('p');
    textAuthor.innerText = author;
    textAuthor.classList.add('card-text')
    textAuthor.classList.add('mb-0');
    
    const textYear = document.createElement('p');
    textYear.innerText = year;
    textYear.classList.add('card-text')
    textYear.classList.add('mt-0')

    const btnEdit = document.createElement('button');
    btnEdit.classList.add('btn');
    btnEdit.classList.add('btn-outline-warning');
    btnEdit.innerHTML= '<i class="fa-solid fa-pen-to-square"></i>';
    btnEdit.addEventListener('click', () => {
        modal.style.display= 'block';
        editData(id)
        
    })
    
    
    const btnTrash = document.createElement('button');
    btnTrash.classList.add('btn');
    btnTrash.classList.add('ms-2');
    btnTrash.classList.add('btn-outline-danger');
    btnTrash.innerHTML= '<i class="fa-solid fa-trash"></i>';
    btnTrash.addEventListener('click', () => {
        swal({
            title: "Apakah anda yakin mau menghapus?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                removeBook(id);
                swal("Buku anda berhasil terhapus!", {
                icon: "success",
              });
            } else {
              swal("Buku anda tidak dihapus!", {
                icon: "info",
              });
            }
          });
        
    });

    const textContainer = document.createElement('div');
    textContainer.classList.add('card-body')
    textContainer.append(textTitle, textAuthor, textYear, btnEdit, btnTrash);

    if(isComplete) {
        const btnUndo = document.createElement('button');
        btnUndo.classList.add('btn');
        btnUndo.classList.add('ms-2');
        btnUndo.classList.add('btn-outline-primary');
        btnUndo.innerHTML= '<i class="fa-solid fa-rotate-left"></i>';
        btnUndo.addEventListener('click', () => {
            undoFromComplete(id);
        })
        textContainer.append(btnUndo);
    } else {
        const btnOk = document.createElement('button');
        btnOk.classList.add('btn');
        btnOk.classList.add('ms-2');
        btnOk.classList.add('btn-outline-success');
        btnOk.innerHTML= '<i class="fa-solid fa-circle-check"></i>';
        btnOk.addEventListener('click', ()=> {
            addTocomplete(id);
        })
        textContainer.append(btnOk);
    }
    
    const containerText = document.createElement('div');
    containerText.classList.add('col-md-8');
    containerText.append(textContainer);

    const image = document.createElement('img');
    image.setAttribute('src', './public/image/1.jpg');
    image.classList.add('img-fluid');
    image.classList.add('rounded-start');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('col-md-4');
    imageContainer.append(image);

    const containerTextImage = document.createElement('div');
    containerTextImage.classList.add('row');
    containerTextImage.classList.add('g-0');
    containerTextImage.append(imageContainer, containerText);

    const containerAll = document.createElement('div');
    containerAll.classList.add('card');
    containerAll.classList.add('mb-3');
    containerAll.classList.add('data-buku');
    containerAll.style.maxWidth = '540px';
    containerAll.setAttribute('id', `bookId-${id}`);
    containerAll.append(containerTextImage)
    
    return containerAll;
};

export default makeBookshelf;