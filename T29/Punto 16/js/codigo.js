
function reloj(){
    var fecha=new Date();

    
    var hora=fecha.getHours();
    var minutos=fecha.getMinutes();
    var segundos=fecha.getSeconds();
    
    //Validación para que ponga siempre dos cifras
    if(hora>=0 && hora<=9){
        hora="0"+hora;
    }
    if(minutos>=0 && minutos<=9){
        minutos="0"+minutos;
    }
    if(segundos>=0 && segundos<=9){
        segundos="0"+segundos;
    }
    document.getElementById("reloj").innerHTML=hora+" : "+minutos+" : "+segundos;
    
    //Función de Javascript que ejecuta el metodo cada segundo
    setInterval("reloj()",1000);
}
