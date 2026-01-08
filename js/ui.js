// attiva/disattiva il menu a tendina quando si clicca sull'icona del menu
const navToggleBtn = document.querySelector('.menu-icon');
const dropdownMenu = document.querySelector('.mobile-menu');
navToggleBtn.addEventListener('click', function () {
    dropdownMenu.classList.toggle('active');
});

// Chiudi menu a tendina quando si clicca su un link del menù
const navLinks = document.querySelectorAll('.mobile-menu a');
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        dropdownMenu.classList.remove('active');
    });
});