function catToConsole(categories, i) {
  console.log(
    `'Category: ${categories.item(i).querySelector('h2').textContent}`
  );
}
function elToConsole(categories, i) {
  console.log(
    'Elements:',
    categories.item(i).querySelector('ul').children.length
  );
}

function iterator(categories) {
  console.log(`Number of categories: ${categories.length}`);
  console.log('');
  for (let i = 0; i < categories.length; i += 1) {
    catToConsole(categories, i);
    elToConsole(categories, i);
    console.log('');
  }
}

iterator(document.querySelector('#categories').children);
