// console.log('helo')
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector('#ingredients');
// const elements = ingredients.map((ingredient) => {
//    const liItem = document.createElement('li');
//    liItem.textContent =ingredient;
//    liItem.classList.add('item');
//    return liItem;
// })

const makeListItemElement = ingredients => {
   return ingredients.map((ingredient) => {
      const liItem = document.createElement('li');
      liItem.textContent = ingredient;
      liItem.classList.add('item');
      return liItem;
   })
}
 const elements=makeListItemElement(ingredients)

ingredientsList.append(...elements);