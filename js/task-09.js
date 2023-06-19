function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColorEl = document.querySelector('.widget');
const nameColorEl = document.querySelector('.color');
const changeColorButtonEl = document.querySelector('.change-color');

changeColorButtonEl.addEventListener('click', btnClick);
function btnClick() {
  const randomColor = getRandomHexColor();
  bodyColorEl.style.backgroundColor = randomColor;
  nameColorEl.textContent = randomColor;
}

// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн -
// стиль по кліку на button.change - color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// changeColorButtonEl.addEventListener('click', () => {
//   const randomColor = getRandomHexColor();
//   bodyColorEl.style.backgroundColor = randomColor;
//   nameColorEl.textContent = randomColor;
// });
