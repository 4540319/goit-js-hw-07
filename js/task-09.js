const bodyRef = document.querySelector('body');
const buttonRef = document.querySelector('button[type="button"]');
const spanRef = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {bodyRef.style = `background-color:${getRandomHexColor()}`;
spanRef.textContent = `${getRandomHexColor()}`;
}

buttonRef.addEventListener('click', changeColor);
