const textInput = document.querySelector("#validation-input");
const textLenght = textInput.getAttribute("data-length");

textInput.addEventListener("blur", (event) => {
    if (textLenght > event.target.value.length) {
      textInput.classList.remove("valid");
      textInput.classList.add("invalid");
    } else {
      textInput.classList.remove("invalid");
      textInput.classList.add("valid");
    }
});


