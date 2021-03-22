var numero = document.getElementById("numero");
var resultado = document.getElementById("result");

function factorial(){
    let result = numero.value;
    for (let index = numero.value-1; index > 0; index--) {
        result *= index;
    }
    resultado.innerHTML = numero.value+"! = "+result;
}