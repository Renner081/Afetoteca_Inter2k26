//aqui fica o script global do modo escuro. cuidado ao mexer pode deixar as paginas em branco total!
const botaoTema = document.getElementById('botao-escuro');
const icone = botaoTema.querySelector('i');
const html = document.documentElement;

if (localStorage.getItem('tema') === 'dark') {
    html.setAttribute('data-theme', 'dark');
    botaoTema.setAttribute('aria-pressed', 'true');
    botaoTema.setAttribute('aria-label', 'Ativar modo claro');
    icone.className = 'ti ti-sun';
}

botaoTema.addEventListener('click', function () {
    const estaEscuro = html.getAttribute('data-theme') === 'dark';

    if (estaEscuro) {
        html.removeAttribute('data-theme');
        botaoTema.setAttribute('aria-pressed', 'false');
        botaoTema.setAttribute('aria-label', 'Ativar modo escuro');
        icone.className = 'ti ti-moon';
        localStorage.setItem('tema', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
        botaoTema.setAttribute('aria-pressed', 'true');
        botaoTema.setAttribute('aria-label', 'Ativar modo claro');
        icone.className = 'ti ti-sun';
        localStorage.setItem('tema', 'dark');
    }
});