let botaoMostraProjeto = document.querySelector(".bnt-mostra-projetos");
let projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");

botaoMostraProjeto.addEventListener("click", () => {
    mostraProjetos()
    removerBotao()
});

function removerBotao() {
    botaoMostraProjeto.classList.add("remover")
}

function mostraProjetos() {
    projetosInativos.forEach(projetosInativos => {
        projetosInativos.classList.add("ativo");
    });

}
