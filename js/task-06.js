/*Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів. 
Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

*/

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputChangeBorderColor);

function onInputChangeBorderColor(event) {
  //   console.log(event.currentTarget.value.trim().length);
  //   console.log(Number(inputEl.dataset.length));

  if (
    event.currentTarget.value.trim().length === Number(inputEl.dataset.length)
  ) {
    inputEl.classList.add("valid");
  } else inputEl.classList.add("invalid");
}
