const btnRight = document.querySelector("[btnArrowRight]");
const btnLeft = document.querySelector("[btnArrowLeft]");
const elements = document.querySelector(".elements");
let pixels = 50;

btnRight.addEventListener("click", () => {
  pixels -= 50;
  elements.style.transform = `translateX(${pixels}px)`;
});

btnLeft.addEventListener("click", () => {
  pixels += 50;
  elements.style.transform = `translateX(${pixels}px)`;
});
