//a)
function suma (param1, param2){
    let resultado;
    resultado = param1 + param2;
    return resultado;
}

console.log("La suma de 12 + 12 = "+ suma(12,12));

//b)
(function(param1, param2){
    console.log(param1+param2);
}(12, 12));


