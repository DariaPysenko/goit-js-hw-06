const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsRef = document.querySelector('#ingredients');
const createList = (elementList) => {
  return elementList.map((ingredientsName) => {
    const ingredientsItem = document.createElement('li');
    ingredientsItem.textContent = ingredientsName;
    ingredientsItem.classList.add('item');
    return ingredientsItem;
  });
};

const ingredientsList = createList(ingredients);

ingredientsRef.append(...ingredientsList);
console.log(ingredientsRef)










// const list = document.querySelector('#ingredients');
// const oneIngredient = ingredients.forEach(createEl)

// function createEl(element) {
//   const createLi = document.createElement('li');
//   createLi.textContent = element;
 

  
// }







