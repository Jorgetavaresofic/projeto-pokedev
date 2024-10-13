const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
        esconderCartaoPokedev();

        const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

        desativarPokededNaListagem();
        ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);

    })
})


function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
    const pokeSelecionadoNaListagem = document.getElementById(idPokedevSelecionado); pokeSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokededNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo"); pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir); cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto"); cartaoPokedevAberto.classList.remove("aberto");
}

