var nomUsuario;
var objUsuarioSelec;
var califExam1;
var califExam2;
var califExam3;
var califExam4;
var nivel = 1;

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

        let nivelesComp = objUsuarioSelec.progreso;

        for(var i = 0; i < 16; i++){
            if(nivelesComp[i] == true){
                nivel++;
            }
        }

        let calificiones = objUsuarioSelec.examenes;

        califExam1 = calificiones[0];
        califExam2 = calificiones[1];
        califExam3 = calificiones[2];
        califExam4 = calificiones[3];

        cargarIndex();

    })

    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });

}

function pasarNivel() {
    return nivel;
}

function pasarTest1() {
    return califExam1; 
}

function pasarTest2() {
    return califExam2; 
}

function pasarTest3() {
    return califExam3; 
}

function pasarTest4() {
    return califExam4; 
}