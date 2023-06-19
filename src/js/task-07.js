const fontSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
fontSizeEl.addEventListener('input', event => {
  textEl.style.fontSize = event.currentTarget.value + 'px';
});
console.dir(textEl);
const loginFormEl = document.querySelector('.login-form');
loginFormEl.addEventListener('submit', loginSubmit);
function loginSubmit(event) {
  event.preventDefault();
}

// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті,
//     перетягуючи повзунок, буде змінюватися розмір тексту.
