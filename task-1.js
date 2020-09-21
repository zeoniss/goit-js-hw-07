const itemEl = document.querySelectorAll('.item');
console.log(itemEl);
const categoryList = `'В списке ${itemEl.length} категории.'`;
console.log(categoryList);
const category = array => {
    array.forEach(element => {
        const titleText = element.querySelector('h2');

        const itemEl = element.querySelectorAll('li');

        const output = `Категория: ${titleText.textContent}. Количество элементов: ${itemEl.length}.`;
        console.log(output);
    });
};
category(itemEl);