var nomUsuario;
var objUsuarioSelec;

var datosUsuario = [];

let randomNumber = Math.random();
let url = `../php/selectedUser.txt?random=${randomNumber}`;

fetch(url)
.then(response => response.text())
.then(data => {
    nomUsuario = data;
    leerJSON();
})


function leerJSON(){

    let randomNumber = Math.random();
    let url = `../php/usuarios.JSON?random=${randomNumber}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {

        let numUsuarios = Object.keys(data).length

        for(var i = 0; i < numUsuarios; i++){

            let nomCompleto = data[i].nombre + ' ' + data[i].apellidos;

            if(nomCompleto === nomUsuario){
                objUsuarioSelec = data[i];
                break;
            }

        }

        console.log(objUsuarioSelec);

        datosUsuario = [        
            objUsuarioSelec.nombre, 
            objUsuarioSelec.apellidos, 
            objUsuarioSelec.fecha_nacimiento, 
            objUsuarioSelec.genero, 
            objUsuarioSelec.semestre, 
            objUsuarioSelec.especialidad,
            objUsuarioSelec.contrasena
        ];

        console.log(datosUsuario);

        rellenarTabla();

    })

    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });

}

function rellenarTabla(){
    for(var i = 0; i < datosUsuario.length; i++){

        document.getElementById("dato" + i).innerHTML = datosUsuario[i];

    }
}
