function mostrarImagen(idFoto){
    var titulo=document.getElementById("titulo");
    var altImg;
    if(idFoto==1){
        document.getElementById("imagenC").src="../../Recursos/foto1.jpg";
        altImg=document.getElementById("1").alt;
        titulo.innerHTML=altImg;
    }else if(idFoto==2){
        document.getElementById("imagenC").src="../../Recursos/foto2.jpg";
        altImg=document.getElementById("2").alt;
        titulo.innerHTML=altImg;
  
    }else if(idFoto==3){
        document.getElementById("imagenC").src="../../Recursos/foto3.jpg";
        altImg=document.getElementById("3").alt;
        titulo.innerHTML=altImg;

    }else if(idFoto==4){
        document.getElementById("imagenC").src="../../Recursos/foto4.jpg";
        altImg=document.getElementById("4").alt;
        titulo.innerHTML=altImg;

    }else if(idFoto==5){
        document.getElementById("imagenC").src="../../Recursos/foto5.jpg";
        altImg=document.getElementById("5").alt;
        titulo.innerHTML=altImg;

    }else if(idFoto==6){
        document.getElementById("imagenC").src="../../Recursos/foto6.jpg";
        altImg=document.getElementById("6").alt;
        titulo.innerHTML=altImg;

    }else if(idFoto==7){
        document.getElementById("imagenC").src="../../Recursos/foto7.jpg";
        altImg=document.getElementById("7").alt;
        titulo.innerHTML=altImg;

    }else if(idFoto==8){
        document.getElementById("imagenC").src="../../Recursos/foto8.jpg";
        altImg=document.getElementById("8").alt;
        titulo.innerHTML=altImg;

    }

}