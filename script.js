document.addEventListener("DOMContentLoaded", function() {
    // Carregar o header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;

            // Após carregar o header, adicionar funcionalidade de menu responsivo
            const menuToggle = document.querySelector('.menu-toggle');
            const nav = document.querySelector('nav ul');

            if (menuToggle) {
                menuToggle.addEventListener('click', function() {
                    nav.classList.toggle('showing');
                });
            }

            // Smooth scroll para os links de navegação (após carregamento do header)
            const navLinks = document.querySelectorAll('nav ul li a');

            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = e.currentTarget.getAttribute("href");
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        });

    // Carregar o footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });

    // Adicionar mais funcionalidades aqui
    // Exemplo: Carrossel de imagens, animações ao rolar a página, etc.
});
