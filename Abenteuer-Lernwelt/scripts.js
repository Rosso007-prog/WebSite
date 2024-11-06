
document.addEventListener("DOMContentLoaded", function() {
    // Hover effects for buttons
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transition = 'all 0.3s ease';
            button.style.transform = 'scale(1.1)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Scroll-based animations for features
    const features = document.querySelectorAll('.feature');
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        features.forEach((feature, index) => {
            const featurePos = feature.offsetTop;
            if (scrollPos + window.innerHeight >= featurePos + 50) {
                feature.style.opacity = '1';
                feature.style.transform = 'translateY(0)';
            } else {
                feature.style.opacity = '0';
                feature.style.transform = 'translateY(50px)';
            }
        });
    });

    // Play sound effect when button is clicked
    const soundEffect = new Audio('button-click.mp3');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            soundEffect.play();
        });
    });
});
