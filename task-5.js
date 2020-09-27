const elemInput = document.querySelector('#name-input')
const nameOutputEl = document.querySelector('#name-output')

elemInput.addEventListener('input', onNameOutput)

function onNameOutput(event) {
    if (event.currentTarget.value !== ``) {
        nameOutputEl.textContent = event.currentTarget.value
    } else {
        nameOutputEl.textContent = 'незнакомец'
    }
}