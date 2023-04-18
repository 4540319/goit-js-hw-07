const inputRef = document.querySelector('#font-size-control');
const outputRef = document.querySelector('#text');

const zoom = () =>
    outputRef.style = `font-size: ${inputRef.value}px`;
inputRef.addEventListener('input', zoom)