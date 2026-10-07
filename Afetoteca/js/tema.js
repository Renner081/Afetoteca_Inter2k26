//aqui fica o script global do modo escuro. cuidado ao mexer pode deixar as paginas em branco total!
const botaoTema = document.getElementById('botao-escuro');
const icone = botaoTema.querySelector('i');
const html = document.documentElement;

const texto = document.createElement('span');
texto.className = 'btn-temae-texto';
botaoTema.appendChild(texto);

function atualizarBotao(escuro) {
    botaoTema.setAttribute('aria-pressed', escuro ? 'true' : 'false');
    botaoTema.setAttribute('aria-label', escuro ? 'Ativar modo claro' : 'Ativar modo escuro');
    botaoTema.title = escuro ? 'Mudar para o modo claro' : 'Mudar para o modo escuro';
    icone.className = escuro ? 'ti ti-sun' : 'ti ti-moon';
    texto.textContent = escuro ? 'Modo claro' : 'Modo escuro';
}

if (localStorage.getItem('tema') === 'dark') {
    html.setAttribute('data-theme', 'dark');
    atualizarBotao(true);
} else {
    atualizarBotao(false);
}

botaoTema.addEventListener('click', function () {
    const estaEscuro = html.getAttribute('data-theme') === 'dark';

    if (estaEscuro) {
        html.removeAttribute('data-theme');
        atualizarBotao(false);
        localStorage.setItem('tema', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
        atualizarBotao(true);
        localStorage.setItem('tema', 'dark');
    }
});