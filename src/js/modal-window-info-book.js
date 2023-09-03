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
  bookElement: document.querySelector('.ul-global'),
};
console.log(refs.cardInfoBook);
console.log(refs.btnList);
console.log(refs.backdrop);
console.log(refs.bookElement);

// refs.btn.addEventListener('click', openModal);
refs.btnList.addEventListener('click', cheangeTextOfBtn);
refs.modalBtnClose.addEventListener('click', closeModal);
refs.backdrop.addEventListener('click', clickOnBackdrop);
// refs.btnListRemove.addEventListener('click', addBtnRemove);
refs.bookElement.addEventListener('click', addcontent);

const BASE_URL = 'https://books-backend.p.goit.global/books/';
async function getInfoByBooks(bookId) {
  const getData = await axios.get(
    `https://books-backend.p.goit.global/books/${bookId}`
  );
  return getData.data;
}

async function addcontent(e) {
  const id = e.target.closest('.book');
  openModal();
  const data = await getInfoByBooks(id.dataset.id);
  const markUp = createContent(data);

  addMarkup(markUp, refs.cardInfoBook);
}

function addMarkup(markup, el) {
  el.innerHTML = markup;
}

function createContent({ book_image, title, author, buy_links }) {
  const cardBook = `
<img class = "image " src="${book_image}" alt=""   />
<div class = "info-book">
<h2 class = "title">${title}</h2>
<p class="author">${author}</p>
<p class="description"></p>
<ul class = "list-links">
<li class="item-book"><a href="${buy_links[0].url}" target="_blank" class="">${linkShop.amazon}</a></li>
<li class="item-book"><a href="" target="_blank" class=""></a></li>
<li class="item-book"><a href="" target="_blank" class=""></a></li>
</ul>
</div>`;
  console.log(buy_links[0].url);

  return cardBook;
  // refs.cardInfoBook.insertAdjacentHTML('afterbegin', cardBook);
}

// const linkShop = {
//   amazon: `<img src= "${amazon}" alt="logo Amazon" width="62" height="19">`,
//   appleBooks: `<img src="${applebook}" alt="logo Apple" width="33" height="32">`,
//   bookshop: `<img src="${bookshop}" alt="logo Bookshop" width="38" height="36">`,
// };

function getLink(name) {
  if (name in linkShop) {
    const image = linkShop[name];
    return image;
  } else return '';
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
  refs.btnList.textContent = 'remove from the shopping list';
  refs.congratulations.hidden = false;
  // refs.btnListRemove.hidden = true;
  // refs.btnList.hidden = false;
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
