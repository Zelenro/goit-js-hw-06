const buttonEl = document.querySelector('#counter');
const decrementEl = buttonEl.lastElementChild;
const incrementEl = buttonEl.firstElementChild;
const counterValueEl = document.querySelector('#value');
let counterValue = 0;

decrementEl.addEventListener('click', () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
});

incrementEl.addEventListener('click', () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
});

// console.dir(buttonEl);
// console.dir(counterClickEl);
// console.dir(buttonEl);
// console.dir(decrementEl);
// console.dir(incrementEl);

// 1. Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та
// ініціалізуй її значенням 0.
// 2. Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// 3. Оновлюй інтерфейс новим значенням змінної counterValue.
