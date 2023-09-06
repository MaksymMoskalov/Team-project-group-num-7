import axios from 'axios';
import amazon from '../images/link-png/amazon.png';
import applebook from '../images/link-png/applebook.png';
import bookshop from '../images/link-png/bookshop.png';
import amazondark from '../images/link-png/amazondark.png';
import Pagination from 'tui-pagination';

const empty = document.querySelector('.empty');
empty.classList.add('not-is-hidden');
const ulList = document.querySelector('.book-list');
const STORAGE_KEY = 'book-to-buy';

async function addToShopList() {
  const getArr = await JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (getArr) {
    if (getArr.length > 0) {
      empty.classList.replace('not-is-hidden', 'is-hidden');
      const markup = createBookListMarkUp(getArr);
      ulList.innerHTML = markup;
      displayPage(1, getArr);
    } else {
      empty.classList.replace('is-hidden', 'not-is-hidden');
    }
  }
}
addToShopList();
const nocontet = 'no content';
function createBookListMarkUp(arr) {
  const isDarkTheme = document.body.classList.contains('dark-theme');

  return arr
    .map(
      ({
        _id,
        list_name,
        book_image,
        author,
        title,
        description,
        buy_links,
      }) => {
        const amazonImageSrc = isDarkTheme ? amazondark : amazon;
        return `<li class="book-item" id="${_id}">
              <div class="book-data">
                <div class="book-img"">
                <img src="${book_image}" alt="book1"></div>
                <div class="book-info">
                  <h2 class="book-name">${title}</h2>
                  <p class="book-category">${list_name}</p>
                  <p class="book-desc">
                    ${description || nocontet}
                  </p>
                  <div class="author-shoplinks">
                    <p class="book-author">${author}</p>
                    <ul class="shop-links">
                      <li class="item-book">
                        <a href="${buy_links[0].url}" target="_blank" class="">
                          <img class = "img-amazzon-dark"
                            src="${amazonImageSrc}"
                            alt="${buy_links[0].name}"
                          />
                        </a>
                      </li>
                      <li class="item-book">
                        <a href="${buy_links[1].url}" target="_blank" class="">
                          <img
                            src="${applebook}"
                            alt="${buy_links[1].name}"
                            width="16px"
                            height="16px"
                          />
                        </a>
                      </li>
                      <li class="item-book">
                        <a href="${buy_links[4].url}" target="_blank" class="">
                          <img
                            src="${bookshop}"
                            alt="${buy_links[4].name}"
                            width="16px"
                            height="16px"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <button type="button" class="btn-delete" data-id="${_id}">
                <svg class="icon-delete" data-id="${_id}" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                     <path data-id="${_id}" d="M8.25 2.75H13.75M2.75 5.5H19.25M17.4167 5.5L16.7738 15.1427C16.6774 16.5894 16.6291 17.3128 16.3167 17.8613C16.0416 18.3441 15.6266 18.7323 15.1265 18.9747C14.5585 19.25 13.8335 19.25 12.3836 19.25H9.61643C8.1665 19.25 7.44153 19.25 6.87348 18.9747C6.37336 18.7323 5.95841 18.3441 5.68332 17.8613C5.37085 17.3128 5.32263 16.5894 5.22618 15.1427L4.58333 5.5M9.16667 9.625V14.2083M12.8333 9.625V14.2083" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </li>`;
      }
    )
    .join('');
}
ulList.addEventListener('click', deleteBtn);

// Delete from LocalStorage and from Shopping List
function deleteBtn(event) {
  if (
    event.target.nodeName !== 'BUTTON' &&
    event.target.nodeName !== 'svg' &&
    event.target.nodeName !== 'path' &&
    '#text'
  ) {
    return;
  }
  const data = getLocalData();
  const idx = data.findIndex(({ _id }) => _id === event.target.dataset.id);
  data.splice(idx, 1);
  savedData(data);
  if (data.length === 0) {
    empty.classList.replace('is-hidden', 'not-is-hidden');
    const markup = createBookListMarkUp(data);
    ulList.innerHTML = markup;
  } else {
    empty.classList.replace('not-is-hidden', 'is-hidden');
    const markup = createBookListMarkUp(data);
    ulList.innerHTML = markup;
  }
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



/**
  |============================
  | PAGINATION
  |============================
*/


// Визначаємо змінні для налаштувань пагінації
  const paginationContainer = document.getElementById('pagination');
  const itemsPerPage = 3; // Кількість елементів на сторінці

  // Функція для відображення певної сторінки з даними
  function displayPage(pageNumber, data) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = data.slice(startIndex, endIndex);
    const markup = createBookListMarkUp(itemsToShow);
    ulList.innerHTML = markup;
  }

  // Оновлюємо сторінку при зміні сторінки в пагінації
  function handlePageChange(eventData) {
    const currentPage = eventData.page;
    displayPage(currentPage, getLocalData());
  }

  // Ініціалізуємо пагінацію
  const pagination = new Pagination(paginationContainer, {
    totalItems: getLocalData().length, // Загальна кількість елементів
    itemsPerPage: itemsPerPage,        // Кількість елементів на сторінці
    visiblePages: 1,                  // Кількість видимих сторінок у пагінації
    centerAlign: true,                // Вирівнювання по центру
  });

  // Додаємо обробник події при зміні сторінки в пагінації
  pagination.on('beforeMove', handlePageChange);