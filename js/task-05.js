const inputField = document.querySelector("#name-input");
const outputField = document.querySelector("#name-output");

inputField.addEventListener("input", onInputChange);

function onInputChange(event) {
  outputField.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    outputField.textContent = "Anonymus";
  }
}
