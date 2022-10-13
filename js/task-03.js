const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listImg = document.querySelector(".gallery");

const liArrayImg = images
  .map(
    (image) =>
      `<li class="list-item"><img class="picture" src=${image.url} width = '350' height = '235'  alt='${image.alt}'></img></li>`
  )
  .join("");

listImg.insertAdjacentHTML("beforeend", liArrayImg);

listImg.style.display = "flex";
listImg.style.flexWrap= "wrap";
listImg.style.listStyle = "none";
listImg.style.gap = "20px";
listImg.style.justifyContent = "center";

