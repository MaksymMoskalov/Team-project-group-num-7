import axios from 'axios';
import { createBookListMarkup, workWithData, axiosPosts } from './book-list';

const bookCardListEl = document.querySelector('.ul-global');
const categoryListEl = document.querySelector('.category-list');
const headerEl = document.querySelector('.main-headline');
const BASE_URL = 'https://books-backend.p.goit.global/books/category?category=';
categoryListEl.addEventListener('click', onChooseCategory);

async function onChooseCategory(e) {
  const category = e.target.dataset.category;
  headerEl.innerHTML = `${category}`;
  if (category === 'All categories') {
    bookCardListEl.innerHTML = '';
    headerEl.innerHTML = `Best Sellers <span class="headline-books">Books</span>`;
    axiosPosts();
    return;
  } else {
    const data = await getBooks(category);
    bookCardListEl.classList.add('book-card-main-list');
    createMarkupBookCard(data);
  }
}

function createMarkupBookCard(arr) {
  const bookCardMarkup = arr
    .map(({ _id, book_image, title, author }) => {
      return `<li class="book-js book-card-item" data-id="${_id}"><div class="img-box"><img class="book-card" src="${book_image}"  alt="${title} book image"><div class="overlay"><p class="overlay-txt">quick view</p></div></div><h3 class="book-card-header">${title}</h3><p class="book-card-text">${author}</p></li>`;
    })
    .join('');
  return (bookCardListEl.innerHTML = bookCardMarkup);
}

async function getBooks(choosenCategory) {
  const response = await axios.get(`${BASE_URL}${choosenCategory}`);
  return response.data;
}
