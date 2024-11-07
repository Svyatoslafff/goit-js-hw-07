'use strict'

const greetingByName = {
    nameInput: document.querySelector('#name-input'),
    nameSpace: document.querySelector('#name-output'),
    nameChanging() {
        if (!greetingByName.nameSpace.textContent || greetingByName.nameInput.value.trim() === '') {
            greetingByName.nameSpace.textContent = 'Anonymous';
        } else {
            greetingByName.nameSpace.textContent = greetingByName.nameInput.value.trim();
        }
    }
}

greetingByName.nameInput.addEventListener('keyup', greetingByName.nameChanging);

