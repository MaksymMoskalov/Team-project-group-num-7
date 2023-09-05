import axios from 'axios';
import amazon from '../images/link-png/amazon.png';
import applebook from '../images/link-png/applebook.png';
import bookshop from '../images/link-png/bookshop.png';
import amazondark from '../images/link-png/amazondark.png';

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

refs.btnList.addEventListener('click', cheangeTextOfBtn);
refs.modalBtnClose.addEventListener('click', closeModal);
refs.backdrop.addEventListener('click', clickOnBackdrop);

refs.bookElement.addEventListener('click', addcontent);

const BASE_URL = 'https://books-backend.p.goit.global/books/';
async function getInfoByBooks(bookId) {
  const getData = await axios.get(
    `https://books-backend.p.goit.global/books/${bookId}`
  );
  return getData.data;
}
let currentBook = '';
let bookID = '';

async function addcontent(e) {
  if (e.target.nodeName === 'BUTTON') {
    return;
  }
  const id = e.target.closest('.book-js');
  bookID = id.dataset.id;
  openModal();
  const data = await getInfoByBooks(id.dataset.id);
  currentBook = data;

  const markUp = createContent(data);
  addMarkup(markUp, refs.cardInfoBook);

  const isPresent = getLocalData().some(({ _id }) => _id === id.dataset.id);
  buttonChange(isPresent);
}

function addMarkup(markup, el) {
  el.innerHTML = markup;
}
// const nocontet = 'no content';
// function createContent({ book_image, title, author, description, buy_links }) {
//   const cardBook = `
// <img class = "image " src="${book_image}" alt="photo of the book"   />
// <div class = "info-book">
// <h2 class = "title">${title}</h2>
// <p class="author">${author}</p>
// <p class="description">${description || nocontet}</p>
// <ul class = "list-links">
// <li class="item-book"><a href="${
//     buy_links[0].url
//   }" target="_blank" ><img class = "" src="${amazon}" alt="${
//     buy_links[0].name
//   }"   /></a></li>
// <li class="item-book"><a href="${
//     buy_links[1].url
//   }" target="_blank" ><img class = "" src="${applebook}" alt="${
//     buy_links[1].name
//   }"   /></a></li>
// <li class="item-book"><a href="${
//     buy_links[4].url
//   }" target="_blank" ><img class = "" src="${bookshop}" alt="${
//     buy_links[4].name
//   }"   /></a></li>
// </ul>
// </div>`;
//   console.log(buy_links[0].url);

//   return cardBook;
// }
const nocontent = 'no content';

function createContent({ book_image, title, author, description, buy_links }) {
  const isDarkTheme = document.body.classList.contains('dark-theme');

  
  const amazonImageSrc = isDarkTheme ? amazondark : amazon;

  const cardBook = `
    <img class="image" src="${book_image}" alt="фото книги" />
    <div class="info-book">
      <h2 class="title">${title}</h2>
      <p class="author">${author}</p>
      <p class="description">${description || nocontent}</p>
      <ul class="list-links">
        <li class="item-book"><a href="${buy_links[0].url}" target="_blank"><img class="" src="${amazonImageSrc}" alt="${buy_links[0].name}" /></a></li>
        <li class="item-book"><a href="${buy_links[1].url}" target="_blank"><img class="" src="${applebook}" alt="${buy_links[1].name}" /></a></li>
        <li class="item-book"><a href="${buy_links[4].url}" target="_blank"><img class="" src="${bookshop}" alt="${buy_links[4].name}" /></a></li>
      </ul>
    </div>`;

  console.log(buy_links[0].url);

  return cardBook;
}
function getLink(name) {
  if (name in linkShop) {
    const image = linkShop[name];
    return image;
  } else return '';
}

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

function cheangeTextOfBtn(event) {
  console.log(event.target);
  let flag = false;
  const action = event.target.dataset.action;
  if (action === 'add') {
    toLocalStorage(currentBook);
    flag = true;
  } else {
    const data = getLocalData();
    const idx = data.findIndex(({ _id }) => _id === bookID);
    data.splice(idx, 1);
    savedData(data);
  }
  buttonChange(flag);
}

function buttonChange(value) {
  if (value) {
    refs.btnList.textContent = 'remove from the shopping list';
    refs.congratulations.hidden = false;
    refs.btnList.setAttribute('data-action', 'remove');
  } else {
    refs.btnList.textContent = 'Add to shopping list';
    refs.congratulations.hidden = true;
    refs.btnList.setAttribute('data-action', 'add');
  }
}

const STORAGE_KEY = 'book-to-buy';
function toLocalStorage(value) {
  const arrayOfBooks = getLocalData();
  arrayOfBooks.push(value);
  savedData(arrayOfBooks);
}
function getLocalData() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err.message);
  }
}
function savedData(params) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(params));
}
