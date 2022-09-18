/*Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.
 */
let counterValue = 0;
let valueEl = document.querySelector("#value");
const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');

decrementEl.addEventListener("click", onDecrement);
incrementEl.addEventListener("click", onIncrement);

function onDecrement() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function onIncrement() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
