const NUMERO_WHATSAPP = "558187285703"; // atualize aqui se o número da Afetoteca mudar


document.getElementById("form-voluntario").addEventListener("submit", function (evento) {
    evento.preventDefault();

    const aviso = document.getElementById("form-aviso");
    const nome = document.getElementById("nome").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();
    const email = document.getElementById("email").value.trim();
    const disponibilidade = document.getElementById("disponibilidade").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const areas = Array.from(document.querySelectorAll('input[name="area"]:checked')).map(c => c.value);

    if (!nome || !whatsapp) {
        aviso.textContent = "Preencha pelo menos o nome e o WhatsApp para continuar.";
        aviso.classList.add("erro");
        return;
    }

    aviso.classList.remove("erro");
    aviso.textContent = "Abrindo o WhatsApp...";

    let texto = `Olá! Quero ser voluntário(a) na Afetoteca.\n\n`;
    texto += `Nome: ${nome}\n`;
    texto += `WhatsApp: ${whatsapp}\n`;
    if (email) texto += `E-mail: ${email}\n`;
    if (areas.length) texto += `Área de interesse: ${areas.join(", ")}\n`;
    if (disponibilidade) texto += `Disponibilidade: ${disponibilidade}\n`;
    if (mensagem) texto += `\nMensagem: ${mensagem}`;

    const link = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(texto)}`;
    window.open(link, "_blank");
});