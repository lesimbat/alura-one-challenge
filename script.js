const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncrypt(){
    const textEncrypted = encriptar(textArea.value);
    mensagem.value = textEncrypted;
    textArea.value = "";
}

function encriptar(stringEncrypted) {

    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncrypted = stringEncrypted.toLowerCase();

    for(let i = 0; i < matrixCode.length; i++) {
        if(stringEncrypted.includes(matrixCode[i][0])) {
            stringEncrypted = stringEncrypted.replaceAll(matrixCode[i][0],matrixCode[i][1]);
        }
    }

    return stringEncrypted;
}

function btnDecrypt(){
    const textDecrypted = desencriptar(textArea.value);
    mensagem.value = textDecrypted;
    textArea.value = "";
}

function desencriptar(stringDecrypted) {

    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDecrypted = stringDecrypted.toLowerCase();

    for(let i = 0; i < matrixCode.length; i++) {
        if(stringDecrypted.includes(matrixCode[i][1])) {
            stringDecrypted = stringDecrypted.replaceAll(matrixCode[i][1],matrixCode[i][0]);
        }
    }

    return stringDecrypted;
}


function copyToClipboard() {
    mensagem.select();
    mensagem.setSelectionRange(0, 99999); // Para dispositivos móveis

    document.execCommand("copy");

    alert("Texto copiado!");
}


