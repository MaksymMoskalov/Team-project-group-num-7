import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global/books/top-books';
function getInfoByBooks(bookId) {
  return axios.get(BASE_URL, {
    params: {
      id: `${bookId}`,
    },
  });
}

const refs = {
  btn: document.querySelector('.load-more'),
  backdrop: document.querySelector('.backdrop'),
  modal: document.querySelector('.modal'),
  modalBtnClose: document.querySelector('.modal-btn-close'),
  cardInfoBook: document.querySelector('.info-book-card'),
  congratulations: document.querySelector('.congratulations'),
  btnList: document.querySelector('.list-btn'),
};
console.log(refs.cardInfoBook);
console.log(refs.btnList);
console.log(refs.backdrop);

refs.btn.addEventListener('click', openModal);
refs.btnList.addEventListener('click', cheangeTextOfBtn);
refs.modalBtnClose.addEventListener('click', closeModal);
refs.backdrop.addEventListener('click', clickOnBackdrop);

function openModal() {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
}

function closeModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
}

function clickOnBackdrop(event) {
  if (event.currentTarget === event.target) {
    closeModal();
  }
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

getInfoByBooks()
  .then(responce => {
    const data = responce.data.map(book => book.books);
    console.log(data);
    createMarkup(data);
  })
  .catch(error => {
    console.log(error);
  });

function createMarkup(arr) {
  const cardBook = arr
    .map(el => {
      return `
<img class = "image " src="${el.book_image}" alt=""   />
<div class = "info-book">
<h2 class = "title">${el.title}</h2>
<p class="author">${el.author}</p>
<p class="description">ghb</p>
<ul>
<li></li>
<li></li>
<li></li>
</ul>
</div>`;
    })
    .join('');
  refs.cardInfoBook.insertAdjacentHTML('afterbegin', cardBook);
}

function cheangeTextOfBtn() {
  if ((refs.btnList.textContent = 'Add to shopping list')) {
    removeBtnList = refs.btnList.textContent = 'remove from the shopping list';
    refs.modal.style.height = '501px';
    refs.congratulations.hidden = false;

    refs.btnList.addEventListener('click', event => {
      console.log(event);
      if (event.currentTarget) {
        refs.btnList.textContent = 'add to shopping list';
        refs.modal.style.height = '465px';
        refs.congratulations.hidden = true;
      }
    });
  }
}
