const burgerMenu = document.querySelector('#burger-menu');
const menuBody = document.querySelector(".menu__body");
burgerMenu.addEventListener('click', () =>  menuBody.classList.toggle("hidden"));