/*Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous". */

const nameInput = document.querySelector("#name-input");
const nameGreeting = document.querySelector("#name-output");
nameInput.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === "") {
    nameGreeting.textContent = "Anonymous";
  } else nameGreeting.textContent = event.currentTarget.value;
}
