const taskOne = document.querySelectorAll(`.item`);
console.log('Number of categories: ', taskOne.length);

taskOne.forEach(function (item) {
  console.log('Category:', item.querySelector('h2').textContent);
  console.log('Elements:', item.lastElementChild.children.length);
});

// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку
// елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.
