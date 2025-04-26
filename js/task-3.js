const textInput = document.querySelector('.js-text-input');
const output = document.querySelector('.js-output'); 

textInput.addEventListener('input', (event) => {
    const handleInputEvent = event.currentTarget.value.trim();
    output.textContent = handleInputEvent === '' ? 'Anonymous' : handleInputEvent;
});