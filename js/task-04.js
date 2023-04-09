//створюємо поле інпут і кнопки
const controls = document.createElement('div');
controls.id = 'controls';
const input = document.createElement('input');
input.type = 'number';
input.id = 'amount';
input.min = '1';
input.max = '100';
input.step = '1';
const createButton = document.createElement('button');
createButton.type = 'number';
createButton.className = 'c_button'
createButton.textContent = 'Create';
const destroyButton = document.createElement('button');
destroyButton.type = 'number';
destroyButton.className = 'd_button';
destroyButton.textContent = 'Destroy';
document.querySelector('#counter').after(controls);
document.querySelector('#controls').append(input, createButton, destroyButton);
//створюємо дів боксис
const boxes = document.createElement('div');
boxes.id = 'boxes';
document.querySelector('#controls').after(boxes);
//функції створити і видалити діви всередині боксису
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
//додаємо слухачів
const cButton = document.querySelector(".c_button");
const addDiv = () => {
    createBoxes(document.getElementById('amount').value);
};
cButton.addEventListener("click", addDiv);

const dButton = document.querySelector(".d_button");
const removeDiv = () => {
    destroyBoxes();
};
dButton.addEventListener("click", removeDiv);