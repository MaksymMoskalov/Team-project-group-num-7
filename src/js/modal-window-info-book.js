import axios from 'axios';
import amazon from '../images/link-png/amazon.png';
import applebook from '../images/link-png/applebook.png';
import bookshop from '../images/link-png/bookshop.png';

const refs = {
  btn: document.querySelector('.load-more'),
  backdrop: document.querySelector('.backdrop'),
  modal: document.querySelector('.modal'),
  modalBtnClose: document.querySelector('.modal-btn-close'),
  cardInfoBook: document.querySelector('.info-book-card'),
  congratulations: document.querySelector('.congratulations'),
  btnList: document.querySelector('.list-btn'),
  btnListRemove: document.querySelector('.list-btn-remove'),
  bookElement: document.querySelector('.book'),
};
console.log(refs.cardInfoBook);
console.log(refs.btnList);
console.log(refs.backdrop);
console.log(refs.bookElement);

refs.btn.addEventListener('click', openModal);
refs.btnList.addEventListener('click', cheangeTextOfBtn);
refs.modalBtnClose.addEventListener('click', closeModal);
refs.backdrop.addEventListener('click', clickOnBackdrop);
refs.bookElement.addEventListener('click', addcontent);

const BASE_URL = 'https://books-backend.p.goit.global/books/top-books';
function getInfoByBooks(bookId) {
  return axios.get(BASE_URL, {
    params: {
      id: `${bookId}`,
    },
  });
}

const linkShop = {
  amazon: `<img src= "${amazon}" alt="logo Amazon" width="62" height="19">`,
  appleBooks: `<img src="${applebook}" alt="logo Apple" width="33" height="32">`,
  bookshop: `<img src="${bookshop}" alt="logo Bookshop" width="38" height="36">`,
};

function getLink(name) {
  if (name in linkShop) {
    const image = linkShop[name];
    return image;
  } else return '';
}
// слушатель события должен быть
function addcontent(e) {
  getInfoByBooks()
    .then(responce => {
      const data = responce.data.map(book => book.books[0]);
      const link = responce.data.map(book =>
        book.books[0].buy_links.map(({ url }) => url)
      );
      console.log(data);
      console.log(link);
      createContent(data);
    })
    .catch(error => {
      console.log(error);
    });
}

function createContent(arr) {
  const cardBook = arr
    .map(el => {
      return `
<img class = "image " src="${el.book_image}" alt=""   />
<div class = "info-book">
<h2 class = "title">${el.title}</h2>
<p class="author">${el.author}</p>
<p class="description"></p>
<ul class = "list-links">
<li class="item-book"><a href="" target="_blank" class=""></a></li>
<li class="item-book"><a href="" target="_blank" class=""></a></li>
<li class="item-book"><a href="" target="_blank" class=""></a></li>
</ul>
</div>`;
    })
    .join('');
  refs.cardInfoBook.insertAdjacentHTML('afterbegin', cardBook);
}

// async function getInfoAboutBook(bookId) {
//   const response = await fetch(`${URL}${bookId}`);
//   const dataRespons = await response.json();
//   const bookObj = {
//     id: dataRespons._id,
//     img: dataRespons.book_image,
//     bookName: dataRespons.list_name,
//     author: dataRespons.author,
//     description: dataRespons.description,
//     shops: dataRespons.buy_links,
//     title: dataRespons.title,
//   };
//   return bookObj;
// }

function openModal() {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
  document.body.style.overflowY = 'hidden';
}

function closeModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
  document.body.style.overflowY = '';
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

function cheangeTextOfBtn() {
  // refs.btnList.hidden = false;
  // refs.btnList.hidden = true;
  // refs.btnListRemove.hidden = false;
  // if ((refs.btnList.textContent = 'Add to shopping list')) {
  // removeBtnList = refs.btnList.textContent = 'remove from the shopping list';
  // refs.modal.style.height = '501px';
  // refs.congratulations.hidden = false;
  // refs.btnList.addEventListener('click', event => {
  //   console.log(event);
  //   if (event.currentTarget) {
  //     refs.btnList.textContent = 'add to shopping list';
  //     refs.modal.style.height = '465px';
  //     refs.congratulations.hidden = true;
  //   }
  // });
  // }
}
