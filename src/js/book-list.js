import axios from 'axios';
import Notiflix from 'notiflix';

const ulGlobal = document.querySelector('.ul-global');

async function axiosPosts() {
  const URL = 'https://books-backend.p.goit.global/books/top-books';
  const { data } = await axios.get(URL);
  workWithData({ data });
}
axiosPosts();

function workWithData({ data }) {
  try {
    data.forEach(category => {
      const { list_name, books } = category;
      if (books.length) {
        const liGlobal = document.createElement('li');
        liGlobal.classList.add('li-in-global');
        ulGlobal.appendChild(liGlobal);

        const categoryPar = document.createElement('p');
        categoryPar.classList.add('categories');
        categoryPar.textContent = `${list_name}`;
        liGlobal.appendChild(categoryPar);

        const categoryList = document.createElement('ul');
        categoryList.classList.add('ul-category');
        liGlobal.appendChild(categoryList);

        categoryList.insertAdjacentHTML(
          'beforeend',
          createBookListMarkup({ books })
        );
        const seeMore = document.createElement('button');
        seeMore.textContent = 'see more';
        seeMore.classList.add('see-more');
        seeMore.setAttribute('data-category', list_name);
        liGlobal.appendChild(seeMore);
        ulGlobal.addEventListener('click', seeMoreBtn);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

function createBookListMarkup({ books }) {
  const markup = books
    .map(({ list_name, book_image, title, author, _id }) => {
      return `<li class="book book-js" data-id="${_id}">
      <div class='box'>
        <img src="${book_image}" alt="${list_name}" class="img-book"/>
        <div class="overlay">
      <p class="overlay-txt">quick view</p>
      </div>
      </div>
      <h3 class="title-main">${title}</h3>
      <p class="author-main">${author}</p>
    </li>`;
    })
    .join('');
  return markup;
}

async function seeMoreBtn(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const categoryBtn = e.target.dataset.category;
  const { data } = await axios.get(
    `https://books-backend.p.goit.global/books/category?category=${categoryBtn}`
  );
  const newBooksMarkup = createBookMarkupData({ data });

  const categoryContainer = e.target
    .closest('.li-in-global')
    .querySelector('.ul-category');

  categoryContainer.innerHTML = newBooksMarkup;

  const categoryBooks = categoryContainer.querySelectorAll('.book');
  categoryBooks.forEach(book => {
    book.style.display = 'block';
  });

  if (categoryBooks.length >= data.length) {
    Notiflix.Notify.info('Sorry, there are no more books');
  }
  e.target.style.display = 'none';
}
export { createBookListMarkup, workWithData, axiosPosts };

function createBookMarkupData({ data }) {
  const markup = data
    .map(({ list_name, book_image, title, author, _id }) => {
      return `<li class="book book-js" data-id="${_id}">
      <div class='box'>
        <img src="${book_image}" alt="${list_name}" class="img-book"/>
        <div class="overlay">
      <p class="overlay-txt">quick view</p>
      </div>
      </div>
      <h3 class="title-main">${title}</h3>
      <p class="author-main">${author}</p>
    </li>`;
    })
    .join('');
  return markup;
}
