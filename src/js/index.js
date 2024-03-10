const botoes = document.querySelectorAll(".botao");

const estadios = document.querySelectorAll(".estadio");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {

    desselecionarBotao();

    botao.classList.add("selecionado");

    desselecionarEstadio();
    
    estadios[indice].classList.add("selecionado");
  });
});
function desselecionarEstadio() {
    const estadioSelecionado = document.querySelector(".estadio.selecionado");
    estadioSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
