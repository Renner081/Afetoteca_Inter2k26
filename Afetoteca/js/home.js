
window.addEventListener("load", function () {
    document.body.classList.add("entrou");
});

window.addEventListener("load", function () {
    document.body.classList.add("entrou");
});

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

(function () {
    const chave = "historicoBreadcrumb";
    const pagina = window.location.pathname.split("/").pop().toLowerCase();

    const paginas = {
        "home.html": "Início",
        "sobre.html": "Quem Somos",
        "projetos.html": "Nossos Projetos",
        "ajudar.html": "Quero Ajudar"
    };

// Ao entrar na página inicial, limpa o histórico anterior.
if (pagina === "home.html" || pagina === "") {
    sessionStorage.removeItem(chave);
    return;
}

    if (!paginas[pagina]) return;

    
let historico = [];

try {
    historico = JSON.parse(sessionStorage.getItem(chave) || "[]");

    if (!Array.isArray(historico)) {
        historico = [];
    }
} catch (erro) {
    historico = [];
}

// Se o histórico estiver vazio, começa por Início.
if (historico.length === 0) {
    historico.push({
        pagina: "home.html",
        nome: "Início"
    });
}

// Se a página já estiver no caminho, remove as páginas
// que vinham depois dela.
const posicao = historico.findIndex(function (item) {
    return item.pagina === pagina;
});

if (posicao !== -1) {
    historico = historico.slice(0, posicao + 1);
} else {
    historico.push({
        pagina: pagina,
        nome: paginas[pagina]
    });
}

sessionStorage.setItem(chave, JSON.stringify(historico));


    const breadcrumb = document.querySelector(".breadcrumb");

    if (!breadcrumb) return;

    breadcrumb.innerHTML = "";

    historico.forEach(function (item, indice) {
        if (indice > 0) {
            const separador = document.createElement("span");
            separador.setAttribute("aria-hidden", "true");
            separador.textContent = "›";
            breadcrumb.appendChild(separador);
        }

        if (indice === historico.length - 1) {
            const atual = document.createElement("span");
            atual.setAttribute("aria-current", "page");
            atual.textContent = item.nome;
            breadcrumb.appendChild(atual);
        } else {
            const link = document.createElement("a");
            link.href = item.pagina;
            link.textContent = item.nome;

            link.addEventListener("click", function () {
                sessionStorage.setItem(
                    chave,
                    JSON.stringify(historico.slice(0, indice + 1))
                );
            });

            breadcrumb.appendChild(link);
        }
    });
})();
