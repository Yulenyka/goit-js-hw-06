const refs = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputName);

function onInputName(event) {
    refs.nameLabel.textContent = event.currentTarget.value;
    if (event.target.value === "") {
      refs.nameLabel.textContent = "Anonymous";
    }
}
