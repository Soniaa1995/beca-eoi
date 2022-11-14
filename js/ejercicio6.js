var array1 = [1, 2, 3, 4];

for(var ejemplo in array1){
    switch(array1[ejemplo]){
        case 1: 
            console.log("UNO");
            break;
    
        case 2: 
            console.log("DOS");
            break;
    
        case 3: 
            console.log("TRES");
            break;
    
        case 4: 
            console.log("CUATRO");
            break;
    }
}

array1.push(3);
console.log(array1);

array1.splice(-3);
