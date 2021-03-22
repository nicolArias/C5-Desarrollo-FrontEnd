var texto = document.getElementById("texto");
var resultado = document.getElementById("result");

function validar(){
    let textoI = (texto.value).replace(/ /g, "");//borro los espacios
    let rev = textoI.split("");
    let arrRev = rev.reverse();
    let textoRev = arrRev.join("");
    if(textoI == textoRev){
        resultado.innerHTML = "El texto es un palíndromo"
    }else{
        resultado.innerHTML = "El texto no es un palíndromo"
    }
}