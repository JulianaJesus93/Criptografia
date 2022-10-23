//Interações com botões
var botao = document.querySelector('#codDecod')
var btnB64 = document.querySelector('#envioB64')
var btnCifra = document.querySelector('#envioCifra')

//mudar texto do botão de envio de ambos os métodos
botao.addEventListener('click', function () {
    if (decodificar.checked) {
        btnB64.innerText = 'Decodificar em Base 64';
        btnCifra.innerText = 'Decodificar em Cifra de César';
    } else  if (codificar.checked) {
        btnB64.innerText = 'Codificar em Base 64';
        btnCifra.innerText = 'Codificar em Cifra de César';
    }
})



//Métodos de codificações e decodificações
var codificar = document.querySelector('#codificar')
var decodificar = document.querySelector('#decodificar')


//BASE 64
function base64() {
    var mensagem = document.getElementById("mensagem").value
  
    if (codificar.checked) {
        var codificado = btoa(mensagem)
        document.getElementById("respostaB64").value = codificado
    } else if (decodificar.checked) {
        var decodificado = atob(mensagem)
        document.getElementById("respostaB64").value = decodificado
    } 
}


//CIFRA DE CESAR

//opções de incremento
const incrementoOpcoes = document.querySelector("#incremento")
var opcoes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]

    opcoes.forEach(e=>{
        incrementoOpcoes.innerHTML += "<option>" + e + "</option>"
    })

//função
function cifraDeCesar() {
    var mensagem = document.getElementById("mensagem").value;
    var incremento = parseInt(document.getElementById("incremento").value);
    var caracteres = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                        "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var mensagemFinal = '';

    if (codificar.checked) {
        for(var i = 0; i < mensagem.length; i++) {
            for(var j = 0; j < caracteres.length; j++) {
                if (mensagem[i] == caracteres[j]) {
                    mensagemFinal += caracteres[(j + incremento) % caracteres.length]
                }
            }    
        }
        document.getElementById("respostaCifra").value = mensagemFinal

    } else if (decodificar.checked) {
        for(var i = 0; i < mensagem.length; i++) {
            for(var j = caracteres.length - 1; j >= 0; j--) {
                if (mensagem[i] == caracteres[j] && j - incremento >= 0) {
                    mensagemFinal += caracteres[(j - incremento) % caracteres.length]
                } else if (mensagem[i] == caracteres[j] && j - incremento < 0) {
                    mensagemFinal += caracteres[((j - incremento) % caracteres.length) + caracteres.length]
                }
            }    
        }
        document.getElementById("respostaCifra").value = mensagemFinal
    }
}