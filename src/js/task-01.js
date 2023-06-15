const taskOne = document.querySelector(`#categories`);
const arrTitleItem = [...taskOne.children];
const category = document.querySelector(`.item`);
const categoryName = category.firstChild;
const categoryArr = [...category.lastElementChild.children];

arrTitleItem.forEach(item => console.log(item));

// categoryArr.forEach(item => console.log(item.textContent));

console.log('categoryName', categoryName.textContent);
console.log('Number of categories: ', taskOne.children.length);

console.log(
  'Category: ',
  categoryArr.forEach(item => console.log(item.textContent))
);
