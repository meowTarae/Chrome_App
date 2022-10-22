const container = document.querySelector(".container");
const images = ["ori_1.jpeg", "ori_2.jpeg", "ori_3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/bkImg/${chosenImage}`;
bgImage.id = "bgImage";
container.prepend(bgImage);
