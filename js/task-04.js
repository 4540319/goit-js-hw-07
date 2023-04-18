const decr = document.querySelector('#counter').firstElementChild;
const incr = document.querySelector('#counter').lastElementChild;
const counter = document.querySelector('#value');
var counterValue = 0;

const changeDown = () =>
    counter.textContent = `${counterValue -= 1}`;
const changeUp = () =>
    counter.textContent = `${counterValue += 1}`;

decr.addEventListener('click', changeDown);
incr.addEventListener('click', changeUp);