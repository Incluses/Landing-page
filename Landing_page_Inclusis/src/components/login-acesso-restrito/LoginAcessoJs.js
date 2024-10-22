const senhaInput = document.getElementById('senha');
const mostrarSenha = document.querySelector('.mostrar_senha img');

const olhoAberto = 'src\\assets\\Icone_olhoA.png';
const olhoFechado = 'src\\assets\\Icone_olhoB.png';

mostrarSenha.addEventListener('click', () => {
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        mostrarSenha.src = olhoFechado;
        mostrarSenha.alt = 'Ocultar senha';
    } else {
        senhaInput.type = 'password';
        mostrarSenha.src = olhoAberto;
        mostrarSenha.alt = 'Mostrar senha';
    }
});