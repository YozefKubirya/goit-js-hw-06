const categories = document.querySelectorAll('.item');
console.log(categories)
console.log(`Number of categories: ${categories.length} `)
categories.forEach((categorie) => {
   const categoriesName = categorie.querySelector('h2').textContent;
   const categoriesCount=categorie.querySelectorAll('li').length
   console.log(`Categorie:${categoriesName},Elements:${categoriesCount}`)
});
