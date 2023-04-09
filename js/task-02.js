const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let arrLiElems = [];
for (const elem of ingredients){
const liElem = document.createElement('li');
liElem.textContent = elem;
liElem.className = 'item';
arrLiElems.push(liElem);
};
document.querySelector('#ingredients').append(...arrLiElems);