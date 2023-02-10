const inputEl = document.querySelector("#validation-input");

function onInputBlur(event) {
  if (event.currentTarget.value.length == inputEl.getAttribute("data-length")) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.add("valid");
  }
}
inputEl.addEventListener("blur", onInputBlur);
