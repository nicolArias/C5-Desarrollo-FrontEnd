var n = 36000;
var array = new Array;
function initArray(){
    for(i=0;i<=10;i++){
        array[i]=0;
    }
}
function dados(){
    let res = Math.random()*6+1;
    return Math.floor(res);
}
function lanzarDados(int){
    let res = 0;
    for(i=n;i>0;i--){
        res = dados()+dados();
        array[res-2]++;
    }
}
function mostrarResultados(){
    for(i=0;i<=10;i++){
        console.log("Número de "+(i+2)+" que han salido: "+array[i]);
    }
}
initArray();
lanzarDados();
mostrarResultados();