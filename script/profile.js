// Редактирование профиля
let inputName = document.querySelector('.entrance__name');
let outputName = document.querySelector('.profile__name');
let inputProfession = document.querySelector('.entrance__profession');
let outputProfession = document.querySelector('.profile__profession');

entranceButton.addEventListener('click', function (evt) {
    if (inputName.value !== '') {
        outputName.textContent = inputName.value;
    }
})
entranceButton.addEventListener('click', function () {
    if (inputProfession.value !== '') {
        outputProfession.textContent = inputProfession.value;
    }
})