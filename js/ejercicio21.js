function boton1(){
    var elementoP = document.getElementById("p1");
    var botton = document.getElementById("boton1");
    
    if(elementoP.className == ""){
        elementoP.className = "Parrafo";
        botton.innerText = "Quitar estilo a párrafo";
        botton.className = "aplicado";
    }else{
        elementoP.className = "";
        botton.innerText = "Aplicar estilo a párrafo";
        botton.className = "";
    }
}