function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputQuantity = document.querySelector("#controls>input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

const createBoxes = amount => {
	const elementsToAdd = []
	for (let index = 0; index < amount; index++) {
		const div = document.createElement('div')
		div.style.height = `${30 + 10 * index}px`;
		div.style.width = `${30 + 10 * index}px`;
		div.style.background = getRandomHexColor()
		elementsToAdd.push(div)
	}
	return elementsToAdd
}

const destroyBoxes = () => {
	boxes.innerHTML = ''
}

btnCreate.addEventListener('click', () => {
	let boxesToAdd = createBoxes(inputQuantity.value);
	boxes.append(...boxesToAdd)
})

btnDestroy.addEventListener('click', () => {
  destroyBoxes.call()
})
