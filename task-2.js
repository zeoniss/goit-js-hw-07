const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingredientArray = ingredients.map(menu => {
    const itemElem = document.createElement('li');
    itemElem.textContent = menu;
    return itemElem;
});

const ingrElem = document.querySelector('#ingredients');
ingrElem.append(...ingredientArray);