const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function createP(text = 'Potatoes') {
  const p = document.createElement('p');
  p.textContent = text;
  return p;
}

function createLi(el) {
  const li = document.createElement('li');
  li.className = 'item';
  li.appendChild(createP(el));
  return li;
}

function addLi(list = document.querySelector('#ingredients')) {
  // ingredients.forEach(el => list.appendChild(createLi(el)));
  list.append(...ingredients.map(el => createLi(el)));
}

addLi(document.querySelector('#ingredients'));
