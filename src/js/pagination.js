import { Pagination } from "tui-pagination";
import 'tui-pagination/dist/tui-pagination.css';

document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('pagination');

  // Створюємо екземпляр пагінації
  const pagination = new Pagination(container, {
    totalItems: 100, // Загальна кількість елементів
    itemsPerPage: 3, // Кількість елементів на сторінці
    visiblePages: 4, // Кількість видимих сторінок у пагінації
    centerAlign: false, // Вирівнювання по центру
  });

  // Додаємо обробник події при зміні сторінки
  pagination.on('beforeMove', function(eventData) {
    // Отримуємо номер поточної сторінки
    const currentPage = eventData.page;

    // Отримуємо дані для відображення на поточній сторінці і виводимо їх
    const itemsOnPage = getItemsForPage(currentPage);
    displayItems(itemsOnPage);
  });

  // Функція для отримання даних для відображення на сторінці
  function getItemsForPage(page) {
    // Код для отримання даних для сторінки page
    // Наприклад, якщо є масив з усіма елементами інформації:
    // const allItems = [...];
    // Повертаємо підмасив для поточної сторінки
    return allItems.slice((page - 1) * pagination.itemsPerPage, page * pagination.itemsPerPage);
  }

  // Функція для відображення даних на сторінці
  function displayItems(items) {
    // Код для відображення елементів на сторінці
    // Наприклад, якщо є div для відображення даних:
    // const dataContainer = document.getElementById('data-container');
    // Очищаємо контейнер
    // dataContainer.innerHTML = '';
    // Додаємо дані на сторінку
    // items.forEach(item => {
    //   const itemElement = document.createElement('div');
    //   itemElement.textContent = item;
    //   dataContainer.appendChild(itemElement);
    // });
  }

  // Ініціалізуємо пагінацію на першій сторінці
  pagination.movePageTo(1);
});
