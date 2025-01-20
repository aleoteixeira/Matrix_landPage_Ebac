// =========================
// Gerenciamento de abas
// =========================

// Seleciona os botões e conteúdos relacionados às abas
const tabButtons = document.querySelectorAll('[data-tab-button]');
const tabContents = document.querySelectorAll('[data-tab-id]');

// Função para gerenciar a troca de abas
function handleTabClick(event) {
    const targetButton = event.currentTarget;
    const targetTab = targetButton.getAttribute('data-tab-button');

    // Atualiza o estado dos botões
    tabButtons.forEach(button =>
        button.classList.toggle(
            'about__content__nav__button--is-active',
            button === targetButton
        )
    );

    // Atualiza o estado dos conteúdos
    tabContents.forEach(content => {
        const isActive = content.getAttribute('data-tab-id') === targetTab;
        content.hidden = !isActive;
        content.classList.toggle('about__content__text--is-active', isActive);
    });
}

// Adiciona o evento de clique a todos os botões de abas
tabButtons.forEach(button => {
    button.addEventListener('click', handleTabClick);
});

// =========================
// Rolagem suave
// =========================

// Seleciona os links do menu na header
const headerLinks = document.querySelectorAll('.header__links__item a');

// Função para rolagem suave ao clicar nos links
function smoothScroll(event) {
    event.preventDefault();

    // Obtém o ID do elemento de destino
    const targetId = event.currentTarget.getAttribute('href')?.substring(1);
    const targetElement = document.getElementById(targetId);

    // Verifica se o elemento existe antes de rolar
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth', // Rolagem suave
            block: 'start' // Alinha ao topo
        });
    }
}

// Adiciona evento de clique a cada link do menu
headerLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});
