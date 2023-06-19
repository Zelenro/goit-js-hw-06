const inputEl = document.querySelector('#validation-input');
console.dir(inputEl);
inputEl.addEventListener('blur', borderColor);

function borderColor() {
  const inputValidEl = Number(inputEl.dataset.length);
  const inputInvalidEl = inputEl.value.length;

  const bool = inputInvalidEl === inputValidEl;

  inputEl.classList.toggle('valid', bool);
  inputEl.classList.toggle('invalid', !bool);
}

// function borderColor() {
//     const inputValidEl = inputEl.dataset.length;
//     const inputInvalidEl = inputEl.value.length;

//      if (inputInvalidEl === inputValidEl) {
//         toggleClassEl('valid', 'invalid');
//     } else {
//         toggleClassEl('invalid', 'valid');
// }
//     }

//     function toggleClassEl (a, b) {
//         inputEl.classList.remove(b);
//         inputEl.classList.add(a);
//             }

// const inputEl = document.querySelector('#validator-input');
// inputEl.addEventListener('blur', borderColor);

// function borderColor() {
//   const inputValid = inputEl.getAttribute('data-length');
//   const inputInvalid = inputEl.value.length;

//   if (inputInvalid === +inputValid) {
//     toggleClassEl('valid', 'invalid');
//   } else {
//     toggleClassEl('invalid', 'valid');
//   }
// }

// function toggleClassEl(a, b) {
//   inputEl.classList.remove(a);
//   inputEl.classList.add(b);
// }

// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його
// вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо
// неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid, які ми вже додали
// у вихідні файли завдання.
