// Language box selection
document.querySelectorAll('.language-section-boxes-box').forEach(box => {
    box.addEventListener('click', () => {
        document.querySelectorAll('.language-section-boxes-box').forEach(b => b.classList.remove('selected'));
        box.classList.add('selected');
        // Optional: Save selected language to localStorage or trigger further action
        const language = box.querySelector('span').textContent;
        console.log(`Selected language: ${language}`);
    });
});

// Start lesson button
document.querySelector('.section-main-text-button').addEventListener('click', () => {
    alert('Dars boshlandi! Siz tanlagan til bo‘yicha darsga yo‘naltirilasiz.');
    // Optional: Redirect to a lesson page or trigger a modal
});

// Smooth scrolling for footer links
document.querySelectorAll('.footer-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});