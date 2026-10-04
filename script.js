const botaoNao = document.getElementById("nao");
const botaoSim = document.getElementById("sim");

const pergunta = document.getElementById("pergunta");
const escolha = document.getElementById("escolha");
const resultado = document.getElementById("resultado");

const musica = document.getElementById("musica");


// ==========================
// BOTÃO NÃO FOGE 😂
// ==========================

function fugir() {

    botaoNao.style.position = "fixed";

    const largura = window.innerWidth - botaoNao.offsetWidth;
    const altura = window.innerHeight - botaoNao.offsetHeight;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    botaoNao.style.left = `${x}px`;
    botaoNao.style.top = `${y}px`;
}


// PC
botaoNao.addEventListener("mouseenter", fugir);


// CELULAR
botaoNao.addEventListener("touchstart", (event) => {

    event.preventDefault();

    fugir();

});


// ==========================
// CLICOU SIM ❤️
// ==========================

botaoSim.addEventListener("click", () => {

    pergunta.classList.add("escondido");

    escolha.classList.remove("escondido");


    // COMEÇA A MÚSICA 🎵

    musica.volume = 0.5;

    musica.play().catch((erro) => {

        console.log("Erro ao tocar a música:", erro);

    });

});


// ==========================
// ESCOLHEU O ROLÊ
// ==========================

function escolher(tipo) {

    escolha.classList.add("escondido");

    resultado.classList.remove("escondido");


    // CINEMA 🎬

    if (tipo === "cinema") {

        document.getElementById("emojiResultado").innerText =
            "🎬🍿";

        document.getElementById("tituloResultado").innerText =
            "Cinema escolhido!";

        document.getElementById("textoResultado").innerText =
            "Agora só falta escolher o filme... porque a companhia já está garantida 😏";

    }


    // SURPRESA 🎁

    if (tipo === "surpresa") {

        document.getElementById("emojiResultado").innerText =
            "🎁👀";

        document.getElementById("tituloResultado").innerText =
            "Você escolheu surpresa...";

        document.getElementById("textoResultado").innerText =
            "Corajosa 😂 Agora não adianta perguntar. Só confia em mim.";

    }

}