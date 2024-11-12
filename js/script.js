// Code JavaScript pour masquer ou afficher l'image lors du défilement
let lastScrollY = window.scrollY;
const image = document.getElementById('fullscreenImage');
const scrollButton = document.getElementById('scrollButton');

window.addEventListener('scroll', function() {
    const currentScrollY = window.scrollY;

    // Masquer l'image en défilant vers le bas et l'afficher en défilant vers le haut
    if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        image.classList.add('hide');
    } else if (currentScrollY < lastScrollY) {
        image.classList.remove('hide');
    }

    // Mise à jour du texte du bouton
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        scrollButton.textContent = 'Remonter en haut';
    } else {
        scrollButton.textContent = 'Aller en bas';
    }

    lastScrollY = currentScrollY;
});

// Action du bouton : descendre en bas ou remonter en haut
scrollButton.addEventListener('click', function() {
    if (scrollButton.textContent === 'Aller en bas') {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});
