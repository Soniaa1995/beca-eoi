var pieza1 ={peso: 20};

var pieza2={peso: "20"};

if(pieza1.peso == pieza2.peso)
{
    console.log("Son iguales");
}

if(pieza1.peso === pieza2.peso)
{
    console.log("Son iguales");
}else{
    console.log("No son iguales");
}

pieza1.peso == '20' ? console.log(pieza1.peso + pieza2.peso): console.log(pieza1.peso*pieza2.peso);