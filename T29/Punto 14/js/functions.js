var num;
var acc = 0;
var op = "";
function inicio(){
    num = document.getElementById("panel");
}

function insertar(valor){
    num.value = num.value+valor;
}
function resultado(){
    let act = parseFloat(num.value);
    switch (op){
        case '+':
            num.value = parseFloat(acc+act);
            break;
        case '-':
            num.value = parseFloat(acc-act);
            break;
        case '/':
            num.value = parseFloat(acc/act);
            break;
        case '*':
            num.value = parseFloat(acc*act);
            break;
        default:
            num.value = parseFloat(num.value);
            break;
    }
}
function operar(operador){
    acc=parseFloat(num.value);
    op=operador;
    num.value = 0;
}
function retroceso(){
    num.value = num.value.slice(0,-1);
}
function borrar(){
    num.value = 0;
}
function borrarTodo(){
    num.value = 0;
    acc=0;
    op = "";
}
function raiz(){
    num.value = parseFloat(Math.sqrt(num.value));
}
function parte(){
    num.value = parseFloat(1/num.value);
}
function cambio(){
    num.value = parseFloat(-1*num.value);
}