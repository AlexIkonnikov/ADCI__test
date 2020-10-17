'use strict'
var sliderNews = document.querySelector('.slider__news')
var news = sliderNews.querySelector('.news__list');
var button = sliderNews.querySelector('.news__show');


button.addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.toggle('news__show--open');
    sliderNews.classList.toggle('slider__news--hidden');
    if(document.body.clientWidth <= 1210){
        news.classList.toggle('news__list--hidden');
    }
});