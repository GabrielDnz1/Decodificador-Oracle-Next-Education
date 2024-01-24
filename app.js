let imagemDoContainer = document.getElementById('imagem_do_container_lateral');
let tituloDoContainer = document.getElementById('titulo_retangulo');
let subtituloDoContainer = document.getElementById('subtitulo_retangulo');
let textoDoInput = document.getElementById('inputDeTexto');
let textoDaResposta = document.getElementById('texto_resposta');
let botaoDeCopiar = document.getElementById('container_retangulo_botao_copiar');
var botaoCodificador = document.querySelector("botao_criptografar");
var botaoDescodificador = document.querySelector("botao_descriptografar");

function codificar() {
    //MUDANÇAS NA INTERFACE
    botaoDeCopiar.style.display = "flex";
    imagemDoContainer.remove();
    subtituloDoContainer.remove();
    tituloDoContainer.remove();

    //CRIPTOGRAFIA

    let text = document.getElementById("inputDeTexto").value;

    text = text.replace(/e/g, "enter");
    text = text.replace(/i/g, "imes");
    text = text.replace(/a/g, "ai");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");

    console.log('o valor tá', {text} );
    document.getElementById("texto_resposta").textContent = text;
}

function decodificar() {
    //MUDANÇAS NA INTERFACE
    botaoDeCopiar.style.display = "flex";
    imagemDoContainer.remove();
    subtituloDoContainer.remove();
    tituloDoContainer.remove();

    //CRIPTOGRAFIA

    let text = document.getElementById("inputDeTexto").value;

    text = text.replace(/enter/g, 'e');
    text = text.replace(/imes/g, 'i');
    text = text.replace(/ai/g, 'a');
    text = text.replace(/ober/g, 'o');
    text = text.replace(/ufat/g, 'u');

    console.log('o valor tá', {text} );
    document.getElementById("texto_resposta").textContent = text;
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
