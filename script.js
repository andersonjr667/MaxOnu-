document.addEventListener("DOMContentLoaded", function() {
    // Menu responsivo
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    // Verifique se os elementos do menu existem antes de adicionar o event listener
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('showing');
        });
    }

    // Smooth scroll para os links de navegação
    const navLinks = document.querySelectorAll('nav ul li a');

    // Verifique se há links de navegação antes de adicionar event listeners
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = e.currentTarget.getAttribute("href");
                const targetSection = document.querySelector(targetId);
                
                // Verifique se o elemento alvo existe antes de tentar rolar a página
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Carregar o cabeçalho e rodapé de arquivos HTML externos
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o cabeçalho:', error));

    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o rodapé:', error));
});
