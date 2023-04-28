const categories = document.querySelectorAll('.item');
console.log(categories)
console.log(`Number of categories: ${categories.length} `)
categories.forEach((categorie) => {
   const categoriesName = categorie.firstElementChild.textContent;
   const categoriesCount=categorie.lastElementChild.children.length
   console.log(`Categorie:${categoriesName},Elements:${categoriesCount}`)
});
