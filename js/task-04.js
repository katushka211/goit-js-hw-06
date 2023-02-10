const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterRes = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick(event) {
  counterValue -= 1;
  counterRes.textContent = counterValue;
}

function onIncrementBtnClick(event) {
  counterValue += 1;
  counterRes.textContent = counterValue;
}
