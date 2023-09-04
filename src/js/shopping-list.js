import axios from 'axios';
import amazon from '../images/link-png/amazon.png';
import applebook from '../images/link-png/applebook.png';
import bookshop from '../images/link-png/bookshop.png';

const empty = document.querySelector('.empty');
empty.classList.add('not-is-hidden');
const ulList = document.querySelector('.book-list');
const STORAGE_KEY = 'book-to-buy';

async function addToShopList() { 
    const getArr = await JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (getArr.length > 0) {
        empty.classList.replace('not-is-hidden', 'is-hidden');
        const markup = createBookListMarkUp(getArr);
        ulList.innerHTML = markup;
    }
    else {
        empty.classList.replace('is-hidden', 'not-is-hidden');
    }
}
addToShopList();
const nocontet = 'no content';
function createBookListMarkUp(arr) { 
    return arr.map(({ _id, list_name, book_image, author, title, description, buy_links }) => {
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
                          <img
                            src="${amazon}"
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
                <svg class="icon-delete" width=16 height=16>
                    <use href="./images/header-imgs/header-sprite.svg#icon-trash"></use>
                </svg>
              </button>
            </li>`;
    })
    .join('');
}
ulList.addEventListener('click', deleteBtn);
const btnDelete = document.querySelector('.btn-delete');


// Delete from LocalStorage and fron Shopping List
function deleteBtn(event) { 
    const data = getLocalData();
    console.log(data);
    const idx = data.findIndex(({ _id }) => _id === event.target.dataset.id);
    data.splice(idx, 1);
    savedData(data);
    if (data.length === 0) {
        empty.classList.replace('is-hidden', 'not-is-hidden');
        const markup = createBookListMarkUp(data);
        ulList.innerHTML = markup;
    }
    else {
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