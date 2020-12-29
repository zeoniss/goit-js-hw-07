const input = document.querySelector(`#validation-input`);

input.addEventListener(`blur`, lengthString);
const lengthChecks = Number(input.dataset.length);

function lengthString(event) {
    if (input.value.length === lengthChecks) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else if (input.value.length === 0) {
        input.classList.add('invalid');
        input.classList.remove('valid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
}