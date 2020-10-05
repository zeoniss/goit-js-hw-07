const input = document.querySelector(`#validation-input`)
input.addEventListener(`blur`, function() {
        const inputDataLength = input.getAttribute(`data-length`)

        const inputValueLength = input.value.length
        if (inputDataLength === inputValueLength) {
            input.classList.add('valid')
            input.classList.remove('invalid')
        } else {
            input.classList.add('invalid')
            input.classList.remove('valid')
        }
    })
    // input.addEventListener(`blur`, function() {
    //     const inputDataLength = Number(input.getAttribute(`data-length`))
    //     const inputValueLength = String(input.value.length)
    //     if (inputDataLength === inputValueLength) {
    //         input.classList.add('valid')
    //         input.classList.remove('invalid')
    //     } else {
    //         input.classList.add('invalid')
    //         input.classList.remove('valid')
    //     }
    // })

// function onCheckInputValue(event) {
//     if (
//         event.currentTarget.getAttribute('data-length') >
//         event.currentTarget.value.length
//     ) {
//         elemInput.classList.add('invalid')
//         elemInput.classList.remove('valid')
//     } else {
//         elemInput.classList.add('valid')
//         elemInput.classList.remove('invalid')
//     }
// }