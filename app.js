let imagemDoContainer = document.getElementById('imagem_retangulo');
let tituloDoContainer = document.getElementById('titulo_retangulo');
let subtituloDoContainer = document.getElementById('subtitulo_retangulo');
let textoDoInput = document.getElementById('inputDeTexto');
let textoDaResposta = document.getElementById('texto_resposta');
let botaoDeCopiar = document.getElementById('container_retangulo_botao_copiar');
var botaoCodificador = document.querySelector("botao_criptografar");
var botaoDescodificador = document.querySelector("botao_descriptografar");

function codificar() {
    botaoDeCopiar.style.display = "flex";
    imagemDoContainer.remove();
    subtituloDoContainer.remove();
    tituloDoContainer.remove();
    textoDaResposta.textContent = textoDoInput.value;
}

function copiarValorDoInput() {
    var textoParaCopiar = textoDaResposta.textContent;
    var textoCopiado = document.createElement('textarea');

    textoCopiado.value = textoParaCopiar;

    document.body.appendChild(textoCopiado);
    textoCopiado.select();
    document.execCommand('copy');
    document.body.removeChild(textoCopiado);
}
