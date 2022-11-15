var funciones={
    colorVerde: function(){
        console.log("Verde");
    }
}
funciones.colorVerde();
objeto['colorRojo'] = function() {console.log("Rojo")};
objeto.colorRojo();

objeto['colorRojo'] = function() {objeto.colorVerde()};
objeto.colorRojo();