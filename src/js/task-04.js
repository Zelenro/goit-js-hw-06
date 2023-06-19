const button = document.querySelector('#counter');

// const countClick = document.querySelector('#value');

let counterValue = document.querySelector('#value');

const handleClick = event => {
  counterValue.push(1);
  console.log('qwerty');
  console.log('event: ', event);
};

button.addEventListener('click', handleClick);

console.dir(button);
console.dir(countClick);
console.dir(button);
