const botaoAlterarTema = document.getElementById("botao-alterar-tema")
const body = document.querySelector("body")
const imageBotaoTema = document.querySelector(".botao-sol")

    botaoAlterarTema.addEventListener("click", () => {

        const modoEscuroAtivado = body.classList.contains("modo-escuro")
        
        body.classList.toggle("modo-escuro");

        if (modoEscuroAtivado) {
            imageBotaoTema.setAttribute("src", "./src/imagens/sun.png")
        } else {
            imageBotaoTema.setAttribute("src", "./src/imagens/moon.png")
        }
})