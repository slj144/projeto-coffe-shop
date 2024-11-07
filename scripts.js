// logica de programação

// [] saber quando o usuario clicou no batao 
// [] mudar o posicionamento do modal 
// [] Fazer a mascara ficar visivel 
// [] quando clicar na mascara, fechar o modal 

const modal = document.querySelector('.modal');
const mascara = document.querySelector('.mascara-modal');

function mostrarModal() {
    modal.style.left = '50%'; // Centraliza o modal horizontalmente
    modal.style.visibility = 'visible'; // Torna o modal visível
    mascara.style.visibility = 'visible'; // Mostra a máscara de fundo
}

function esconderModal() {
    modal.style.left = '-100%'; // Move o modal para fora da tela
    mascara.style.visibility = 'hidden'; // Oculta a máscara
}

// Chame mostrarModal() para abrir o modal e esconderModal() para fechar
function esconderModal() {
    modal.style.left = '-100%'; // Move o modal para fora da tela
    modal.style.visibility = 'hidden'; // Oculta o modal
    mascara.style.visibility = 'hidden'; // Oculta a máscara
}

// Exemplo de evento para fechar o modal ao clicar na máscara
mascara.addEventListener('click', esconderModal);