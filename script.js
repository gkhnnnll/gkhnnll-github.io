const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        // Menüyü aç/kapat
        nav.classList.toggle('nav-active');

        // Linklere animasyon ver
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        // Hamburger ikonunu çarpıya dönüştür
        hamburger.classList.toggle('toggle');
    });
}

navSlide();