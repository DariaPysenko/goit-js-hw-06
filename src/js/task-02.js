const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const oneIngredient = ingredients.forEach(createEl)

function createEl(element) {
  const createLi = document.createElement('li');
  createLi.textContent = element;
  list.append(createLi);
}
