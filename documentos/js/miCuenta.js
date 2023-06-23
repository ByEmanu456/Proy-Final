var nomUsuario;
var objUsuarioSelec;

var datosUsuario = [];

<<<<<<< HEAD
const randomNumber = Math.random();
const url = `../php/selectedUser.txt?random=${randomNumber}`;
const url2 = `../php/usuarios.JSON?random=${randomNumber}`;
=======
let randomNumber = Math.random();
let url = `../php/selectedUser.txt?random=${randomNumber}`;
>>>>>>> 87abe65ea9fc49ad48de4a558df46dc8f529b8bd

fetch(url)
.then(response => response.text())
.then(data => {
    nomUsuario = data;
    leerJSON();
})


function leerJSON(){

<<<<<<< HEAD
    fetch(url2)
=======
    let randomNumber = Math.random();
    let url = `../php/usuarios.JSON?random=${randomNumber}`;

    fetch(url)
>>>>>>> 87abe65ea9fc49ad48de4a558df46dc8f529b8bd
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

<<<<<<< HEAD
        rellenarTabla(objUsuarioSelec.color);
=======
        rellenarTabla();
>>>>>>> 87abe65ea9fc49ad48de4a558df46dc8f529b8bd

    })

    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });

}

<<<<<<< HEAD
function rellenarTabla(color){
    //Cambiar el color de fondo de las celdas (superior)
    var datosCelda = document.querySelectorAll(".tabla th, .tabla td");
    for(var i = 0; i < datosCelda.length; i++){
        datosCelda[i].style.backgroundColor = color;
    }
    //Cambiar el color de fondo con opacidad de las celdas (inferior)
    var celdasRestantes = document.querySelectorAll(".tabla td");
    for(var j = 0; j < celdasRestantes.length; j++){
        celdasRestantes[j].style.backgroundColor = `${color}BF`;
    }

    //Rellenar los datos del usuario
    for(var k = 0; k < datosUsuario.length; k++){
        document.getElementById("dato" + k).innerHTML = datosUsuario[k];
    }
}
=======
function rellenarTabla(){
    for(var i = 0; i < datosUsuario.length; i++){

        document.getElementById("dato" + i).innerHTML = datosUsuario[i];

    }
}
>>>>>>> 87abe65ea9fc49ad48de4a558df46dc8f529b8bd
