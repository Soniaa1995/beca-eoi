var array1 = [1, 2, 3, 4];
var resultado = "";


for (var i=0; i<array1.length; i++){
    switch(array1[i]){
    case 1: 
        resultado = "UNO"
        break;

    case 2: 
        resultado = "DOS"
        break;

    case 3: 
        resultado = "TRES"
        break;

    case 4: 
        resultado = "CUATRO"
        break;
    }
}
console.log(resultado);

array1.push(3);
console.log(array1);

console.log(array1.splice(-3));
console.log(array1);