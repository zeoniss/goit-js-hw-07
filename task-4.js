const incrementBtnEl = document.querySelector(
    '#counter button[data-action="increment"]',
)
const decrementBtnEl = document.querySelector(
    '#counter button[data-action="decrement"]',
)

const valueEl = document.querySelector('#value')
let counterValue = 0

incrementBtnEl.addEventListener('click', onIncrementClick)
decrementBtnEl.addEventListener('click', onDecrementClick)

function onIncrementClick() {
    counterValue += 1
    valueEl.textContent = counterValue
    console.log(onIncrementClick)
}

function onDecrementClick() {
    counterValue -= 1
    valueEl.textContent = counterValue
    console.log(onDecrementClick)
}