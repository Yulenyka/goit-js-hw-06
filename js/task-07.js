const sizeInput = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

sizeInput.addEventListener("input", onFontSizeControl);

function onFontSizeControl(event) {
  textSize.style.fontSize = `${event.target.value}px`;
}
