// Редактирование профиля
let inputName = document.querySelector('.entrance__name');
let outputName = document.querySelector('.profile__name');
let inputProfession = document.querySelector('.entrance__profession');
let outputProfession = document.querySelector('.profile__profession');

entranceButton.addEventListener('click', function (evt) {
    outputName.textContent = inputName.value;
})
entranceButton.addEventListener('click', function (evg) {
    outputProfession.textContent = inputProfession.value;
})