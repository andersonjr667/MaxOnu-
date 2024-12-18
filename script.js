document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll para os links de navegação internos
    const navLinks = document.querySelectorAll('nav ul li a');

    // Verifique se há links de navegação antes de adicionar event listeners
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = e.currentTarget.getAttribute("href");

                // Verifique se o link é para uma seção interna da página
                if (targetId.startsWith("#")) {
                    e.preventDefault();
                    const targetSection = document.querySelector(targetId);

                    // Verifique se o elemento alvo existe antes de tentar rolar a página
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    } else {
                        console.error("Seção alvo não encontrada: " + targetId);
                    }
                }
            });
        });
    } else {
        console.error("Nenhum link de navegação encontrado.");
    }

    // Carregar o cabeçalho de arquivo externo
    fetch("header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o cabeçalho');
            }
            return response.text();
        })
        .then(data => {
            const headerPlaceholder = document.getElementById("header-placeholder");
            if (headerPlaceholder) {
                headerPlaceholder.innerHTML = data;
            } else {
                console.error("Elemento de cabeçalho não encontrado.");
            }
        })
        .catch(error => console.error('Erro ao carregar o cabeçalho:', error));

    // Carregar o rodapé de arquivo externo
    fetch("footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o rodapé');
            }
            return response.text();
        })
        .then(data => {
            const footerPlaceholder = document.getElementById("footer-placeholder");
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = data;
            } else {
                console.error("Elemento de rodapé não encontrado.");
            }
        })
        .catch(error => console.error('Erro ao carregar o rodapé:', error));
});
