function ejemploError(){
    try{
        alert("Hay un error!!");
    }catch(error){
        throw new EvalError(["Hay un error", 'ejercicio13.js']);
    }
}