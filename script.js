document.addEventListener("DOMContentLoaded", function() {
    // Menu responsivo
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('showing');
    });

    // Smooth scroll para os links de navegação
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Adicionar mais funcionalidades aqui
    // Exemplo: Carrossel de imagens, animações ao rolar a página, etc.
});
