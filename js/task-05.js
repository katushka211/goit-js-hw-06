// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputField = document.querySelector("#name-input");
const outputField = document.querySelector("#name-output");

inputField.addEventListener("input", onInputChange);

function onInputChange(event) {
  outputField.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    outputField.textContent = "Anonymus";
  }
}
