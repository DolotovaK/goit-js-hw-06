const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

/*Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul#ingredients. */

const productList = document.querySelector("#ingredients");

// ingredients.forEach((ingredient) => {
//   const productItem = document.createElement("li");
//   productItem.textContent = ingredient;
//   productItem.classList.add("item");
//   productList.append(productItem);
// });

const productItems = ingredients.map((ingredient) => {
  const productItem = document.createElement("li");
  productItem.textContent = ingredient;
  productItem.classList.add("item");
  return productItem;
});
console.log(productItems);
productList.append(...productItems);
