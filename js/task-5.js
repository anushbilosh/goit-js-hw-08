function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElem = document.querySelector('body')
const colorSpan = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
changeColorBtn.addEventListener('click',handlerClick)

function handlerClick () {
  const randomColor = getRandomHexColor();
  bodyElem.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}