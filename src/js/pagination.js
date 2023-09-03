import Pagination from "tui-pagination";

const container = document.getElementById('pagination');
const options = {
    totalItems: 100, // Загальна кількість елементів
    itemsPerPage: 3, // Кількість елементів на сторінці
    visiblePages: 3, // Кількість видимих сторінок у пагінації
    centerAlign: true, // Вирівнювання по центру
};

  // Створюємо екземпляр пагінації
const pagination = new Pagination(container, options);

  // Додаємо обробник події при зміні сторінки
pagination.on('beforeMove', function(eventData) {
    // Отримуємо номер поточної сторінки
    const currentPage = eventData.page;


    // Отримуємо дані для відображення на поточній сторінці і виводимо їх
    // const itemsOnPage = getItemsForPage(currentPage);
    // displayItems(itemsOnPage);
});

  // Функція для отримання даних для відображення на сторінці
  function getItemsForPage(page) {
    // Код для отримання даних для сторінки page
  }

  // Функція для відображення даних на сторінці
  function displayItems(items) {
    // Код для відображення елементів на сторінці
    // const dataContainer = document.getElementById('data-container');
    // Очищаємо контейнер
    // dataContainer.innerHTML = '';
    // Додаємо дані на сторінку
    // items.forEach(item => {
    //   const itemElement = document.createElement('...');
    //   itemElement.textContent = item;
    //   dataContainer.appendChild(itemElement);
    // });
  }

  // Ініціалізуємо пагінацію на першій сторінці
pagination.movePageTo(1);

console.log(options)