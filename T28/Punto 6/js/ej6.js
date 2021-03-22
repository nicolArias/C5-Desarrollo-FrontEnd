var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var constante = 23;
let numero;
let letra;

function validarNum(){
    numero = document.getElementById("numero").value;
    letra = document.getElementById("letra").value;
    
    if(numero > 0 && numero < 99999999){
        validarLetra(letra,numero);
    }else{
        document.getElementById("respuesta").innerHTML = "Numero erroneo";
    }
}

function validarLetra(letra, numero){
    let result = numero % constante;
    if(letras[result] == letra){
        document.getElementById("respuesta").innerHTML = "DNI correcto";
    }else{
        document.getElementById("respuesta").innerHTML = "Letra incorrecta";
    }
    




}