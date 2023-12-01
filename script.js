document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.image-carousel');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    let currentIndex = 0;

    function showImage(index) {
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    function updateButtons() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === 5;
    }

    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            showImage(currentIndex);
            updateButtons();
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentIndex < 5) {
            currentIndex++;
            showImage(currentIndex);
            updateButtons();
        } else {
            // Al llegar a la última imagen, vuelve a la primera
            currentIndex = 0;
            showImage(currentIndex);
            updateButtons();
        }
    });
});