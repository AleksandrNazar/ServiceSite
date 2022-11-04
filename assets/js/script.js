//Мобильное меню---------------------------------------------
const button = document.querySelector('#burger');
const mobileMenu = document.querySelector('#menu');

button.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
});

//Активная ссылка--------------------------------------------
let links = document.querySelectorAll('.nav-link');

links.forEach(link => {
    link.addEventListener('click', function() {
        links.forEach(lnk => lnk.classList.remove('active'));
        this.classList.add('active');
    });
});

//Активный язык-----------------------------------------------
let languages = document.querySelectorAll('.header-lng-link');

languages.forEach(language => {
    language.addEventListener('click', function() {
        languages.forEach(lang => lang.classList.remove('active'));
        this.classList.add('active');
    });
});

//Фиксация шапки-----------------------------------------------
window.onscroll = function headerFix() {
    const header = document.querySelector('.header');
    
    if(window.pageYOffset > 100) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
};