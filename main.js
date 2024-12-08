const button = document.getElementById('cta-button');

const targetSection = document.getElementById('interest-form');

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Smooth scroll to the target section
    targetSection.scrollIntoView({ behavior: 'smooth' });
});