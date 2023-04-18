const input = document.querySelector('#controls>input[type=number]')
const cButton = document.querySelector('#controls>button[data-create]');
const dButton = document.querySelector('#controls>button[data-destroy]');

function createBoxes(amount) {
    
    for (let i = 1; i <= amount; i++) {
        const createDiv = document.createElement('div');
        createDiv.className = 'temp';
        createDiv.style = `width: ${30 + 10 * document.getElementsByClassName('temp').length}px; height: ${30 + 10 * document.getElementsByClassName('temp').length}px; margin: 10px; background-color: ${getRandomHexColor()}; border: 3px solid #bebebe;`;
        document.querySelector('#boxes').append(createDiv);
        };
};
    const getRandomHexColor = () => 
         `#${Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, 0)}`;

function destroyBoxes() {
    const divBoxes = document.querySelector('#boxes');
    while (divBoxes.firstChild) {
    divBoxes.removeChild(divBoxes.firstChild)
    };
};

const addDiv = () => {
    createBoxes(input.value);
};
cButton.addEventListener("click", addDiv);

const removeDiv = () => {
    destroyBoxes();
};
dButton.addEventListener("click", removeDiv);
