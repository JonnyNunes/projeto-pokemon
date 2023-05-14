/*
    O que precisamos fazer? - quando clicarmos no botão de troca de tema que altera a cor do tema da página para as cores do tema claro ou do tema escuro

    - objetivo 1 - quando clicar no botão de troca de tema, adiciona a classe o modo-escuro no body para que os estilos do modo-escuro sejam aplicados e mudar a imagem de sol para lua

        - passo 1 - pegar no js o elemento html correspodente ao botão de troca de tema
        - passo 2 - dar um jeito de pegar no js o elemento html corresponde ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a imagem do botão de alterar tema para lua

    - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tinha a classe modo-escuro, remover a classe para mudar pro modo claro e mudar a imagem pro sol

        - passo 6 - verificar se o body está no modo escuro
        - passo 7 - remover a classe do modo-escuro do body
        - passo 8 - trocar a imagem do botão de alterar tema para sol
*/

// log é um método do objeto console
// o document também possue métodos, o qual podemos pegar/manipular elementos do html 

/*
console.log(document.getElementById("botao-alterar-tema"))
*/

// - passo 1 - pegar no js o elemento html correspodente ao botão de troca de tema
// cons (constante) o valor não pode ser alterado da variável
const botaoAlterarTema = document.getElementById("botao-alterar-tema")

// - passo 2 - dar um jeito de pegar no js o elemento html corresponde ao body
// o método getSelection é para consultar um seletor (igual o seletor do css), podemos consultar uma tag, id, class e outros passando no parâmetro do método
const body = document.querySelector("body")

// usa o ponto para referenciar uma classe
const imageBotaoTema = document.querySelector(".botao-sol")

    // - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
    // usaremos o evento ouvinte da variável botaoAlterarTema, que irá disparar uma ação quando acionadada
    botaoAlterarTema.addEventListener("click", () => {
    /*
    - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tinha a classe modo-escuro, remover a classe para mudar pro modo claro e mudar a imagem pro sol
    */

    // - passo 6 - verificar se o body está no modo escuro
    // o método contrains é no sentido de conter, se tiver algo passado no parametro entao retorna um true ou false
    const modoEscuroAtivado = body.classList.contains("modo-escuro")
    // o método toggle é de alternar entre estados
    body.classList.toggle("modo-escuro");

    if (modoEscuroAtivado) {
        /*
        // - passo 7 - remover a classe do modo-escuro do body
        // o método remove vai remover a classe de parametro do elemento referenciado (body)
        body.classList.remove("modo-escuro")
        */
        // - passo 8 - trocar a imagem do botão de alterar tema para sol
        imageBotaoTema.setAttribute("src", "./src/imagens/sun.png")
    } else {
        /*
        // - passo 4 - adicionar a classe modo-escuro no body
        // o método classList me retorna as classes presentes naquele elementos, e ela possue método o qual podemos manipular ou até adicionar atributos
        body.classList.add("modo-escuro")
        */
       
        //- passo 5 - trocar a imagem do botão de alterar tema para lua
        // referência do elementos img e sua classe dentro do elemento button. O primeiro parâmetro é o que eu quero (qual atributo)mudar e o segundo é o caminho da fonte (valor da mudança).
        imageBotaoTema.setAttribute("src", "./src/imagens/moon.png")
    }
})