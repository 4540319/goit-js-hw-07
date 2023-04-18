const inputRef = document.querySelector('input');

const validateText = () =>
    inputRef.value.length == inputRef.dataset.length ? inputRef.className = 'valid' : inputRef.className = 'invalid';
inputRef.addEventListener('blur', validateText)