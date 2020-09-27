const elemInput = document.querySelector('#font-size-control')
const elemText = document.querySelector('#text')

elemInput.addEventListener('input', onFontSize)

function onFontSize(event) {
    elemText.style.fontSize = event.currentTarget.value + 'px'
}