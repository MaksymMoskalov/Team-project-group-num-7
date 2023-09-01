import axios from 'axios';

const tabletWidth = window.innerWidth >= 768;
const computerWidth = window.innerWidth >= 1440;
const ulGlobal = document.querySelector('.ul-global');

async function axiosPosts() {
  const URL = 'https://books-backend.p.goit.global/books/top-books';
  const { data } = await axios.get(URL);
  console.log('data:', data);
  workWithData({ data });
}
axiosPosts();

function workWithData({ data }) {
  try {
    data.forEach(category => {
      const { list_name, books } = category;
      if (books.length > 0) {
        const categoryList = document.createElement('ul');
        categoryList.classList.add('ul-category');
        if (tabletWidth) {
          for (let i = 0; i <= 2; i++) {
            const bookMarkup = createBookMarkup({ list_name, ...books[i] });
            categoryList.insertAdjacentHTML('beforeend', bookMarkup);
          }
        } else if (computerWidth) {
          for (let i = 0; i <= 4; i++) {
            const bookMarkup = createBookMarkup({ list_name, ...books[i] });
            categoryList.insertAdjacentHTML('beforeend', bookMarkup);
          }
        } else {
          for (let i = 0; i <= 0; i++) {
            const bookMarkup = createBookMarkup({ list_name, ...books[i] });
            categoryList.insertAdjacentHTML('beforeend', bookMarkup);
          }
        }
        ulGlobal.appendChild(categoryList);

        // const book = books[0];

        // ulGlobal.insertAdjacentHTML('beforeend', bookMarkup);
      }
    });
    // const seeMoreBtn = document.querySelector('.see-more');
    // seeMoreBtn.addEventListener('click', seeMore);
  } catch (error) {
    console.error(error);
  }
}

function createBookMarkup({ list_name, book_image, title, author }) {
  return `
    <li class="book">
      <p class="categories">${list_name}</p>
      <div class='box'>
        <img src="${book_image}" alt="${list_name}" />
      </div>
      <h3 class="title">${title}</h3>
      <p class="author">${author}</p>
    </li>`;
}

// function workWithData({ data }) {
//   try {
//     const books = data.reduce((accumulator, category) => {
//       return accumulator.concat(category.books);
//     }, []);
//     ulGlobal.insertAdjacentHTML('afterbegin', createBookListMarkup({ books }));
//   } catch (error) {
//     console.error(error);
//   }
// }

// function createBookListMarkup({ books }) {
//   const markup = books
//     .map(({ list_name, book_image, title, author }) => {
//       return `<ul class="ul-child">
//   <li class="book">
//     <p class="categories">${list_name}</p>
//     <div class='box'>
//     <img src="${book_image}" alt="${list_name}" />
//     </div>
//     <h3 class="title">${title}</h3>
//     <p class="author">${author}</p>
//   </li>
//   <button type="button" class="see-more">
//     see more
//   </button>
// </ul>`;
//     })
//     .join('');
//   return markup;
// }
