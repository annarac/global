const hamburger = document.querySelector('.hamburger'),
     submenu = document.querySelector('.submenu'),
     close = document.querySelector('.submenu__close'),
     menu__item = document.querySelector('.menu__item'),
     input = document.querySelector('.promo__search-form__txt');

hamburger.addEventListener('click', () => {
    submenu.classList.add('active');
});

close.addEventListener('click', () => {
    submenu.classList.remove('active');
});

menu__item.addEventListener('click', () => {
    menu__item.classList.add('active');
});

input.addEventListener('input', function(event) {
    const value = event.target.value;
    const forbiddenCharacters = /[\!\@\#\$\%\^\&\*\(\)]/g;
  
    if (forbiddenCharacters.test(value)) {
      event.target.value = value.replace(forbiddenCharacters, '');
    }
});