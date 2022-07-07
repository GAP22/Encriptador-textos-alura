
const boton_encriptar = document.querySelector("#encriptar");
const boton_desencriptar = document.querySelector("#desencriptar");

const input = document.querySelector("textarea");
const resultado = document.querySelector("#result");
const imagen = document.querySelector("#image");
const textdefault1 = document.querySelector("#text-default1");
const textdefault2 = document.querySelector("#text-default2");
const boton_copiar = document.querySelector("#button-copy");

var codigos = [ ["a","ai"], ["e","enter"], ["i","imes"], ["o","ober"], ["u","ufat"] ];

function comprobar_texto_encriptado(){
    if(input.value != ""){
        encriptar(input.value);
    } else {
        mostrar_busqueda_vacia();
    }
}

function comprobar_texto_desencriptado(){
    if(input.value != ""){
        desencriptar();
    } else {
        mostrar_busqueda_vacia();
    }
}

function encriptar(msjEncriptar){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    msjEncriptar = msjEncriptar.toLowerCase();
    for (let i = 0; i< matrizCodigo.length; i++){
        if (msjEncriptar.includes(matrizCodigo[i][0])){
            msjEncriptar = msjEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    mostrar_resultado(msjEncriptar);
}

function desencriptar(){
    let texto = input.value;

    for(let i = 0; i < codigos.length; i++){
            texto = texto.replaceAll(codigos[i][1], codigos[i][0]);
        }

    mostrar_resultado(texto);
}

function copiar_al_portapapeles(){
    navigator.clipboard.writeText(resultado.innerHTML)
        .then(() => {
        console.log("Copiado")
    })
        .catch(err => {
        console.log('Error', err);
    })
}

function mostrar_resultado(texto_procesado){
    resultado.innerHTML = texto_procesado;
    resultado.style.display = "block";
    imagen.style.display = "none";
    textdefault1.style.display = "none";
    textdefault2.style.display = "none";
    boton_copiar.style.display = "block";
}

input.focus();
boton_encriptar.onclick = comprobar_texto_encriptado;
boton_desencriptar.onclick = comprobar_texto_desencriptado;
boton_copiar.onclick = copiar_al_portapapeles;

