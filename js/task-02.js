// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientEl = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add("item");
  // console.log(ingredientItem);
  return ingredientItem;
});

const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(...ingredientEl);
console.log(ingredientsList);

//--------------інший варіант---------

// const ingredientsArray = [];
// ingredients.forEach((ingredient) => {
//   const ingredientItem = document.createElement("li");
//   ingredientItem.textContent = ingredient;
//   ingredientItem.classList.add("item");
//   ingredientsArray.push(ingredientItem);
// });

// const ingredientsList = document.querySelector("#ingredients");
// ingredientsList.append(...ingredientsArray);
// console.log(ingredientsList);
