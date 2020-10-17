'use strict'

var navigation = document.querySelector('.navigation__list');
var button = document.querySelector('.navigation__toggle');
var navItem = navigation.querySelectorAll('.navigation__item');
var dropList = navigation.querySelectorAll('.navigation__dropdown-list');
button.addEventListener('click', toggleNavigation);

function toggleNavigation () {
    navigation.classList.toggle('navigation__list--open');
}

function toggleDropList(nav,drop) {
    nav.addEventListener('click', function(){
        if(document.body.clientWidth <= 1024){
            drop.classList.toggle('navigation__dropdown-list--open');
        }
    }); 
}

for (var i = 0, j = 0; i < navItem.length; i++ ) {
    if(navItem[i].querySelector('.navigation__dropdown-list')){
        toggleDropList(navItem[i], dropList[j]);
        ++j;
    }
}


