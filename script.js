const areaTexto = document.querySelector('.area__texto__input');
const areaMensagem = document.querySelector('.area__mensagem__output');





function botaoEncriptar() {
    const textoEncriptado = encriptar(areaTexto.value);
    areaMensagem.value = textoEncriptado;
    areaTexto.value = '';
    document.getElementById('ami').style.display = "none";
    document.getElementById('btn-bc').style.display = "block";
    document.getElementById('msg').style.display = "block";
}


function encriptar(encriptarMensagem) {

    let matrizEncriptador = [['e' , 'enter'] , ['i' , 'imes'] , ['a', 'ai'] , ['o', 'ober'] , ['u' , 'ufat']];
    encriptarMensagem = encriptarMensagem.toLowerCase();

    for(let i = 0; i < matrizEncriptador.length; i++) {
        if (encriptarMensagem.includes(matrizEncriptador[i][0])) {
            encriptarMensagem = encriptarMensagem.replaceAll(matrizEncriptador[i][0], matrizEncriptador[i][1]);
        }
    }

    return encriptarMensagem;
}

function botaoDesencriptar() {
    const textoDesencriptado = desencriptar(areaTexto.value);
    areaMensagem.value = textoDesencriptado;
    areaTexto.value = '';
    document.getElementById('ami').style.display = "none";
    document.getElementById('btn-bc').style.display = "block";
    document.getElementById('msg').style.display = "block";
}


function desencriptar(desencriptarMensagem) {

    let matrizEncriptador = [['e' , 'enter'] , ['i' , 'imes'] , ['a', 'ai'] , ['o', 'ober'] , ['u' , 'ufat']];
    desencriptarMensagem = desencriptarMensagem.toLowerCase();

    for(let i = 0; i < matrizEncriptador.length; i++) {
        if (desencriptarMensagem.includes(matrizEncriptador[i][1])) {
            desencriptarMensagem = desencriptarMensagem.replaceAll(matrizEncriptador[i][1], matrizEncriptador[i][0]);
        }
    }

    return desencriptarMensagem;
}

document.getElementById('btn-bc').addEventListener('click', copiarTexto);

async function copiarTexto() {
    const textoCopiado = document.getElementById('msg').value;
    console.log('Debugando valor: ' + textoCopiado);
    try {
        await navigator.clipboard.writeText(textoCopiado);
        console.log('Texto copiado com sucesso!');
    } catch (error) {
        console.error('Erro ao copiar texto: ', error.message);
    }
} 