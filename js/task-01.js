const categoriesItem = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach(function (element) {
  console.log(`Category: ${element.firstElementChild.textContent}`);

  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
