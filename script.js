const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".text-mensaje");


function btnencriptar(){
    const fraseEncriptada = encriptar(textarea.value);
    mensaje.value = fraseEncriptada;
    textarea.value = ""; //limpia el texto ingresado despues de la encriptacion
    mensaje.style.backgroundImage = "none"; //limpia la imagen despues de la encriptacion
}

function encriptar(textoEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();

    for(let i=0; i<matrizCodigo.length;i++){
        if(textoEncriptado.includes(matrizCodigo[i][0])){
            textoEncriptado=textoEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return textoEncriptado;
}

function btndesencriptar(){
    const fraseDesencriptada = desencriptar(textarea.value);
    mensaje.value = fraseDesencriptada;
    textarea.value = "";
}

function desencriptar(textoDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();

    for(let i=0; i<matrizCodigo.length;i++){
        if(textoDesencriptado.includes(matrizCodigo[i][1])){
            textoDesencriptado=textoDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return textoDesencriptado;
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}
