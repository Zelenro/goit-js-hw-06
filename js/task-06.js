const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', borderColor);

function borderColor() {
  const inputValidEl = Number(inputEl.dataset.length);
  const inputInvalidEl = inputEl.value.length;

  const bool = inputInvalidEl === inputValidEl;

  inputEl.classList.toggle('valid', bool);
  inputEl.classList.toggle('invalid', !bool);
}

// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його
// вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо
// неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid, які ми вже додали
// у вихідні файли завдання.
