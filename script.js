document.addEventListener("DOMContentLoaded", function() {
    // Menu responsivo
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('showing'); // Alterna a exibição do menu
        });
    }

    // Função para rolar suavemente até a seção ao clicar em um link do menu
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const section = document.querySelector(href);

            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Função para destacar o link ativo no menu com base no scroll
    const navLinks = document.querySelectorAll('nav ul li a');
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop - 50 && scrollPosition < section.offsetTop + section.offsetHeight - 50) {
                let currentId = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});
