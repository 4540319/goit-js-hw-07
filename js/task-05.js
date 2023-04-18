const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const anonym = outputRef.textContent;
const inputText = () =>
    inputRef.value !== '' ? outputRef.textContent = inputRef.value : outputRef.textContent = anonym;
inputRef.addEventListener('input', inputText); 