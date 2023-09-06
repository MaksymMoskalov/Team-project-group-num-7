import axios from 'axios';

const getCategoryList = document.querySelector('.category-list');

function createList(array) {
  return array
    .map(
      ({ list_name }) =>
        `<li class="category-item" data-category="${list_name}" tabindex="0">${list_name}</li>`
    )
    .join('');
}

async function categoryList() {
  const category_url =
    'https://books-backend.p.goit.global/books/category-list';
  const list_data = await axios.get(category_url);
  const markup = createList(list_data.data);
  getCategoryList.insertAdjacentHTML('beforeend', markup);
  return list_data.data;
}

categoryList();
