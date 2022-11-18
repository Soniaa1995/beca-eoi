const request = new Request('https://j4jjw.mocklab.io/users');

const URL = request.url;
const method = request.method;
const credentials = request.credentials;

let datos;
fetch(request)
.then(response => response.json())
.then(data => {
    datos = data.arrayUsuarios;

    let tabla = `<table id="dataTable">
        <thead>
        <tr>
        <th>Nombre</th>
        <th>Apellidos</th>
        <th>Direccion</th>
        </tr>
        </thead>
        <tbody>`;

let finTabla = `</tbody>
</table>`

let filas = ``;

datos.forEach(element => {
    filas+=`<tr>
    <td>${element.nombre}</td>
    <td>${element.apellidos}</td>
    <td>${element.direccion}</td>
    </tr>
    `;
});

tabla+=filas+finTabla;
document.getElementById("resultados").innerHTML = tabla;

})






