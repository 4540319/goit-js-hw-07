const bodyRef = document.querySelector('body');
const buttonRef = document.querySelector('button[type="button"]');
const spanRef = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  const color = getRandomHexColor();
  bodyRef.style = `background-color:${color}`;
  spanRef.textContent = `${color}`;
}

buttonRef.addEventListener('click', changeColor);