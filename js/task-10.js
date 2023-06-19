function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const blockControlsEl = document.querySelector('#controls');
const inputEl = blockControlsEl.firstElementChild;
const createButtonEl = document.querySelector('[data-create]');
const destroyButtonEl = document.querySelector('[data-destroy]');
const boxesContainerEl = document.querySelector('#boxes');

createButtonEl.addEventListener('click', createBoxes);
destroyButtonEl.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = inputEl.value;
  let boxSize = 30;
  let boxesHTML = '';

  for (let i = 0; i < amount; i += 1) {
    const boxColor = getRandomHexColor();
    boxesHTML += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${boxColor}"></div>`;
    boxSize += 10;
  }

  boxesContainerEl.innerHTML = boxesHTML;
}

function destroyBoxes() {
  boxesContainerEl.innerHTML = '';
}

// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість
// елементів в input і натискає кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число.Функція
// створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову
// функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи
// всі створені елементи.
