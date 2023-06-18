var nomUsuario;
var objUsuarioSelec;

var datosUsuario = [];

const randomNumber = Math.random();
const url = `../php/selectedUser.txt?random=${randomNumber}`;

fetch(url)
.then(response => response.text())
.then(data => {
    nomUsuario = data;
    leerJSON();
})


function leerJSON(){

    fetch('../php/usuarios.JSON')
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
