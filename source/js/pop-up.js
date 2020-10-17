'use strict'

var popUp = document.querySelector('.pop-up');
var openPopUp = document.querySelector('.main-header__opener');
var closePopUp = document.querySelector('.pop-up__close');
var overlay = document.querySelector('.overlay');

openPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add('pop-up--show');
    overlay.classList.add('overlay--active');
});

closePopUp.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

function closeModalWindow (e) {
    e.preventDefault();
    popUp.classList.remove('pop-up--show');
    overlay.classList.remove('overlay--active');
}