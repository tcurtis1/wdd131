document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('img.lazy');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                img.classList.add('lazy-loaded');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        observer.observe(img);
    });

    // Set last modified date in footer
    document.getElementById('lastModified').textContent = document.lastModified;
});
