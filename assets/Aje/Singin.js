// Aguarde até que o conteúdo da página esteja completamente carregado
document.addEventListener("DOMContentLoaded", function () {
    // Remova o ouvinte de evento de clique da aba
    document.querySelector('.aba').removeEventListener('click', togglePainel);
});

function togglePainel() {
    // Selecione o painel
    var painel = document.querySelector('.painel');

    // Defina a altura máxima do painel para sempre visível
    painel.style.maxHeight = '300px';
}
