// Botão de voltar ao topo
const botaoTopo = document.getElementById("voltar-topo");

// Mostra o botão ao rolar a página
window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }
};

// Voltar ao topo ao clicar
botaoTopo.onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};