var texto = document.getElementById("texto");
var resultado = document.getElementById("result");

function validar(){
    if(texto.value === (texto.value).toLowerCase()){
        resultado.innerHTML = "Esta en minusculas";
    }else if(texto.value == (texto.value).toUpperCase()){
        resultado.innerHTML = "Esta en mayusculas";
    }else{
        resultado.innerHTML = "Combinacion";
    }
}