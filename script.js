const botaoNao = document.getElementById("nao");
const botaoSim = document.getElementById("sim");

const pergunta = document.getElementById("pergunta");
const escolha = document.getElementById("escolha");
const resultado = document.getElementById("resultado");

const musica = document.getElementById("musica");

const botaoEnviar = document.getElementById("enviarEscolha");

let escolhaFeita = "";


// ========================================
// BOTÃO NÃO FOGE 😂
// ========================================

function fugir() {

    botaoNao.style.position = "fixed";

    const largura =
        window.innerWidth - botaoNao.offsetWidth;

    const altura =
        window.innerHeight - botaoNao.offsetHeight;

    const x = Math.random() * largura;

    const y = Math.random() * altura;

    botaoNao.style.left = `${x}px`;

    botaoNao.style.top = `${y}px`;
}


// COMPUTADOR

botaoNao.addEventListener("mouseenter", fugir);


// CELULAR

botaoNao.addEventListener("touchstart", (event) => {

    event.preventDefault();

    fugir();

});


// ========================================
// CLICOU EM SIM ❤️
// ========================================

botaoSim.addEventListener("click", () => {

    pergunta.classList.add("escondido");

    escolha.classList.remove("escondido");


    // COMEÇA A MÚSICA

    musica.volume = 0.5;

    musica.play().catch((erro) => {

        console.log(
            "Não foi possível tocar a música:",
            erro
        );

    });

});


// ========================================
// ESCOLHEU O ROLÊ
// ========================================

function escolher(tipo) {

    escolhaFeita = tipo;

    escolha.classList.add("escondido");

    resultado.classList.remove("escondido");


    // CINEMA

    if (tipo === "cinema") {

        document.getElementById(
            "emojiResultado"
        ).innerText = "🎬🍿";


        document.getElementById(
            "tituloResultado"
        ).innerText =
            "Cinema escolhido!";


        document.getElementById(
            "textoResultado"
        ).innerText =
            "Agora só falta escolher o filme 😏";

    }


    // SURPRESA

    if (tipo === "surpresa") {

        document.getElementById(
            "emojiResultado"
        ).innerText = "🎁👀";


        document.getElementById(
            "tituloResultado"
        ).innerText =
            "Você escolheu surpresa...";


        document.getElementById(
            "textoResultado"
        ).innerText =
            "Corajosa 😂 Agora não adianta perguntar. Só confia em mim.";

    }

}


// ========================================
// MANDAR ESCOLHA NO WHATSAPP 💌
// ========================================

botaoEnviar.addEventListener("click", () => {

    /*
        COLOQUE SEU WHATSAPP AQUI

        Exemplo:
        (11) 98765-4321

        fica:
        5511987654321
    */

    const numero = "5511967747392";


    let mensagem = "";


    if (escolhaFeita === "cinema") {

        mensagem =
            "Eu escolhi Cinema 🎬🍿";

    }


    if (escolhaFeita === "surpresa") {

        mensagem =
            "Eu escolhi Surpresa 👀🎁";

    }


    const url =
        `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;


    window.open(url, "_blank");

});