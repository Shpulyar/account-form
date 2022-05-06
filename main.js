'use strict'
               
let user = {};
let f1 = document.forms.f1;

let blockName = document.querySelector('.block__name');
let blockEmail = document.querySelector('.block__email');
let blockPosition = document.querySelector('.block__position');
let profil = document.querySelector('.profile-container');
let checkbox = document.querySelector('#formAgreement');
let checkboxLabel = document.querySelector('.checkbox__label');
let iconMan = document.querySelector('.icon-man');
let iconWoman = document.querySelector('.icon-woman');

f1.addEventListener('submit', function (event) {
    event.preventDefault();
    user.name = f1.elements['name'].value;
    user.lastName = f1.elements['lastName'].value;
    user.email = f1.elements['email'].value;
    user.sex = f1.elements['sex'].value;
    user.position = f1.elements['position'].value;
    console.log(user);
    blockName.innerHTML = user.name;
    blockEmail.innerHTML = user.email;
    blockPosition.innerHTML = user.position;
    if (user.sex === 'man') {
        iconWoman.style.display = 'none';
        iconMan.style.display = 'block';
    } else if (user.sex === 'woman') {
        iconWoman.style.display = 'block';
        iconMan.style.display = 'none';
    }
    if (f1 && checkbox.checked) {
        profil.style.display = 'flex';
        f1.style.display = 'none';
    }
});
checkbox.addEventListener('click', function () {
    if (!checkbox.checked) {
        checkboxLabel.style.color = 'red';
        checkboxLabel.textContent = 'Ви не погодилися з умовами!'
    } else {
        checkboxLabel.style.color = 'white';
        checkboxLabel.textContent= 'Я даю згоду на опрацювання даних згідно з Умовами'
    }
});

let btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
    profil.style.display = 'none';
    f1.style.display = 'block';
    f1.reset()
})


