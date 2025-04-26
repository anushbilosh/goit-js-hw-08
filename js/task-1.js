const categoriesListElem = document.querySelector('#categories');
const categoryItemsElem = categoriesListElem.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItemsElem.length}`);

categoryItemsElem.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const elementsCount = item.querySelectorAll('ul li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
