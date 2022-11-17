document.getElementById("formulario").addEventListener("submit", function(event){
        event.preventDefault(); //enviar al servidor
        validarFormulario();
        anyadir();
    
});

function validarFormulario(){
    let nombre = document.getElementById("nombre").value; 
    let correo = document.getElementById("email").value;
    let provincias = document.getElementById("provincias").value

    if(nombre.length > 20 || !nombre.includes("Antonio")){
        alert("Error, el nombre no puede superar 20 caracteres y tiene que ser Antonio");
        return false;
    }
    if(nombre === "" || correo === "" || provincias === ""){
        alert("Todos los campos deben estar rellenos");
        return false;
    } 
    return true;
}

function anyadir(){
    let body = document.getElementsByTagName("body")[0];
    let p = document.createElement("p");
    p.textContent = document.getElementById("nombre").value;
    
    let p2 = document.createElement("p");
    p2.textContent = document.getElementById("email").value;

    let p3 = document.createElement("p");
    p3.textContent = document.getElementById("provincias").value
    body.append(p, p2, p3);
}