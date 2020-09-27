const elemInput = document.querySelector('#validation-input')

elemInput.addEventListener('blur', onCheckInputValue)

function onCheckInputValue(event) {
    if (
        event.currentTarget.getAttribute('data-length') >
        event.currentTarget.value.length
    ) {
        elemInput.classList.add('invalid')
        elemInput.classList.remove('valid')
    } else {
        elemInput.classList.add('valid')
        elemInput.classList.remove('invalid')
    }
}