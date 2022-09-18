/*Напиши скрипт, який:

1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
2. Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
В результаті, в консолі будуть виведені наступні повідомлення.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5 */

//1
const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

//2
const countElementsForEachCategory = categories.forEach((category) => {
  const titleText = category.firstElementChild.textContent;
  //   console.log(titleText);
  const elementsOfCategory = category.lastElementChild.children;
  //   console.log(elementsOfCategory);
  console.log(
    `Category: ${titleText} \n Elements: ${elementsOfCategory.length}`
  );
});
