window.onload = function(){ //Acciones tras cargar la página
    resultado=document.getElementById("resultText"); //elemento pantalla de salida

}
var num1 = 0; //número en pantalla
var num3=0;
var cont=0;
var xi = 1; //iniciar número en pantalla: 1=si; 0=no;
var puntoDec= false; //estado coma decimal false=no, true=si;
var ni = 0; //número oculto o en espera.
var op = "no"; //operación en curso; "no" =  sin operación.
var arreglo=[];
var signo="";

//mostrar número en pantalla según se va escribiendo:
function numero(num2) { //recoge el número pulsado en el argumento.
    console.log(num2);
    if(num1==0){
        resultado.value =""; //mostrar en pantalla
        num1 = ""; //guardar número
        if (num2 == ".") { //si escribimos una coma al principio del número
            resultado.value = "0."; //escribimos 0.
            num1 += num2; //guardar número
            puntoDec = true;
        } else { //continuar escribiendo un número
            if (num2 == "." && puntoDec==false) { //si escribimos una coma decimal pòr primera vez
                resultado.value += num2;
                num1 +=num2;
               // coma = 1; //cambiar el estado de la coma  
            }
            //si intentamos escribir una segunda coma decimal no realiza ninguna acción.
            else if (num2 == "." && puntoDec==true ) { }
            //Resto de casos: escribir un número del 0 al 9: 	 
            else {

               resultado.value += num2;
                num1 += num2;
                console.log("suma numeros: "+num1);
            }
        }
        console.log("Despues del if: "+num2);
        num3=num2;

    }
        
}

function operacion(s) {

    //igual(); //si hay operaciones pendientes se realizan primero
    arreglo[cont]=num3+""+s;
    console.log(arreglo); 
    console.log("indice "+cont);

    cont=cont+1;
    console.log("Suma indices: "+cont);
    resultado.value="";
    num1=0;
}
function igual() {
    console.log("indice "+cont);
    if(signo=="raiz"){
        resultado.value = num3; 
    }else if(signo=="%"){
        resultado.value = num3; 
    }else if(signo=="inverso"){
        resultado.value=num3;
    }else if(signo=="opuesto"){

    }else{
        arreglo[cont]=num3;
        var cadenaOp="";
        var solucion="";
       for(var i=0;i<arreglo.length;i++){
        cadenaOp+=arreglo[i];
        console.log("posicion "+i+" "+arreglo[i]);
       }

       console.log("Cadena operacion: "+cadenaOp);
        solucion = eval(cadenaOp) //convertimos la cadena a código y resolvemos
       resultado.value = solucion //mostramos la solución
       //num = sol; //guardamos la solución
    }
}

function raizc() {
    x = Math.sqrt(num3) //resolver raíz cuadrada.
    signo="raiz";
    
}
function porcentaje() {
    num3 = (num3 / 100);
    num1=0;
    num3 = 0;
    signo="%";
}
function opuest() {
    nx = Number(x); //convertir en número
    nx = -nx; //cambiar de signo
    x = String(nx); //volver a convertir a cadena
    pantalla.innerHTML = x; //mostrar en pantalla.
}
function inverso() {
    inver = Number(num3);
    console.log("Numero inverso "+inver);
    inver = (1 / inver);
    num3 = inver;
   signo="inverso";
 
}

function retro() { //Borrar sólo el último número escrito.
    cifras = x.length; //hayar número de caracteres en pantalla
    br = x.substr(cifras - 1, cifras) //describir último caracter
    x = x.substr(0, cifras - 1) //quitar el ultimo caracter
    if (x == "") { x = "0"; } //si ya no quedan caracteres, pondremos el 0
    if (br == ".") { coma = 0; } //Si el caracter quitado es la coma, se permite escribirla de nuevo.
    pantalla.innerHTML = x; //mostrar resultado en pantalla	 
}
function borradoParcial() {
    resultado.value = 0; //Borrado de pantalla;
    num1 = 0;//Borrado indicador número pantalla.
    signo="";
    arreglo.length=0;
    cont=0;
    puntoDec = false;	//reiniciamos también la coma				
}
function borradoTotal() {
   resultado.value = 0; //poner pantalla a 0
    num1 = "0"; //reiniciar número en pantalla
    num3=0;
    signo="";
    arreglo.length=0;
    cont=0;
    puntoDec = false; //reiniciar estado coma decimal 
  
}
