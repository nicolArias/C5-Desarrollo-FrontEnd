/*Array */
var valores=[true,5,false,"hola","adios",2];

/*1.Determinar cual de los dos elementos de texto es mayor*/
var textoMayor;

if(valores[3]>valores[4]){
    textoMayor="El texto mayor es: "+valores[3];
}else{
    textoMayor="El texto mayor es: "+valores[4];
}

/*2. Utilizando exclusivamente los dos valores booleanos
del array, determinar los operadores necesarios para obtener un resultado true
y otro false*/
var vtrue=valores[0];
var vfalse=valores[2];

//Resultado true
var resulTrue=vtrue || vfalse;

//Resultado false
var resulFalse=vtrue && vfalse;

/**Determinar el resultado de las cinco operaciones matematicas
 * realizadas con los dos elementos numericos*/

var num1=valores[1];
var num2=valores[5];

/**Suma */
var suma=num1+num2;

/**Resta */
var resta=num1-num2;

/**Multiplicacion */
var mult=num1*num2;

/**Division */
var division=num1/num2;

/**Modulo */
var mod=num1%num2;

/**IMPRIMIR EN PANTALLA */
document.write("Elementos de texto mayor"
                +"<br/>"+textoMayor
                +"<br/><br/>Operador || True "+resulTrue
                +"<br/>Operador && False "+resulFalse
                +"<br/><br/>Suma "+num1+" + "+num2+"="+suma
                +"<br/>Resta "+num1+" - "+num2+"="+resta
                +"<br/>Multiplicacion "+num1+" * "+num2+"="+mult
                +"<br/>Division "+num1+" / "+num2+"="+division
                +"<br/>Modulo "+num1+" % "+num2+"="+mod);