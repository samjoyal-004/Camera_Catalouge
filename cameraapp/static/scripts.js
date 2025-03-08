// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImage = document.getElementById('modal-image');
    const modalCameraType = document.getElementById('modal-camera-type');
    const modalResolution = document.getElementById('modal-resolution');
    const modalSensor = document.getElementById('modal-sensor');
    const modalUses = document.getElementById('modal-uses');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title');
            const description = card.getAttribute('data-description');
            const imageSrc = card.querySelector('.card-image').src; // Get the src of the clicked card's image
            const cameraType = card.getAttribute('data-camera-type');
            const resolution = card.getAttribute('data-resolution');
            const sensor = card.getAttribute('data-sensor');
            const uses = card.getAttribute('data-uses');

            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modalImage.src = imageSrc;
            modalCameraType.textContent = cameraType;
            modalResolution.textContent = resolution;
            modalSensor.textContent = sensor;
            modalUses.textContent = uses;

            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});








document.addEventListener('DOMContentLoaded', function () {
    const scrollToSection = (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => link.addEventListener('click', scrollToSection));
});
