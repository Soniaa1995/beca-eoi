
//b) Define una funcion que reciba dos parametros y devuelva el resultado de una suma.
function suma(num1, num2){
    return num1+num2;
}

//c) Define una funcion que reciba dos parametros y devuelva el resultado de una multiplicacion
function multiplica(num1, num2){
    return rnum1*num2;
}

function operacion(){
    let numero1 = Number(document.getElementById('numero1').innerHTML);
    let numero2 = Number(document.getElementById('numero2').innerHTML);
    let sum = suma(numero1, numero2);
    let multiplicacion = multiplica(numero1, numero2);
    suma(sum, multi);
}
operacion();