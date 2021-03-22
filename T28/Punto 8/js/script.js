var numero = document.getElementById("numero");
var resultado = document.getElementById("result");

function validarNum(){
    if(numero.value%2 == 0){
        resultado.innerHTML = "El numero es par";
    }else{
        resultado.innerHTML = "El numero es impar";
    }
}