// Favorite Funciton

const heartIcons = document.querySelectorAll('.favorites-container .fa-heart-o');

heartIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('fa-heart-o');
        icon.classList.toggle('fa-heart');
    });
});