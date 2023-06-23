var nomUsuario;
var objUsuarioSelec;

var nivelesComp;
var calificaciones;
var nivel = 0;

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

        nivelesComp = objUsuarioSelec.progreso;

        console.log(nivelesComp);

        for(var i = 0; i < 16; i++){
            if(nivelesComp[i] == true){
                nivel++;
            }
        }

        calificaciones = objUsuarioSelec.examenes;

        console.log(calificaciones);

        rellenarTabla();

    })

    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });

}

function rellenarTabla(){

    for(var i=0; i<16; i++){

        let celdaTabla = document.getElementById("dato" + i);

        if(nivelesComp[i] == true){
            
            if(celdaTabla.id === 'dato0' || celdaTabla.id === 'dato4' || celdaTabla.id === 'dato8' || celdaTabla.id === 'dato12'){
                celdaTabla.innerHTML = "Visto"
            }

            else if(celdaTabla.id === 'dato1' || celdaTabla.id === 'dato5' || celdaTabla.id === 'dato9' || celdaTabla.id === 'dato13'){
                celdaTabla.innerHTML = "Leído"
            }

            else if(celdaTabla.id === 'dato2' || celdaTabla.id === 'dato6' || celdaTabla.id === 'dato10' || celdaTabla.id === 'dato14'){
<<<<<<< HEAD
                celdaTabla.innerHTML = "Resuelto"
=======
                celdaTabla.innerHTML = "Resuleto"
>>>>>>> 87abe65ea9fc49ad48de4a558df46dc8f529b8bd
            }

            else if(celdaTabla.id === 'dato3'){
                celdaTabla.innerHTML = calificaciones[0] + " de califiación";
            }

            else if(celdaTabla.id === 'dato7' ){
                celdaTabla.innerHTML = calificaciones[1] + " de califiación";
            }

            else if(celdaTabla.id === 'dato11' ){
                celdaTabla.innerHTML = calificaciones[2] + " de califiación";
            }

            else if(celdaTabla.id === 'dato15'){
                celdaTabla.innerHTML = calificaciones[3] + " de califiación";
            }
        }

        else{
            
            if(celdaTabla.id === 'dato0' || celdaTabla.id === 'dato4' || celdaTabla.id === 'dato8' || celdaTabla.id === 'dato12'){
                celdaTabla.innerHTML = "Sin ver"
            }

            else if(celdaTabla.id === 'dato1' || celdaTabla.id === 'dato5' || celdaTabla.id === 'dato9' || celdaTabla.id === 'dato13'){
                celdaTabla.innerHTML = "Sin leer"
            }

            else if(celdaTabla.id === 'dato2' || celdaTabla.id === 'dato6' || celdaTabla.id === 'dato10' || celdaTabla.id === 'dato14'){
                celdaTabla.innerHTML = "Sin resolver"
            }

            else if(celdaTabla.id === 'dato3' || celdaTabla.id === 'dato7' || celdaTabla.id === 'dato11' || celdaTabla.id === 'dato15'){
<<<<<<< HEAD
                celdaTabla.innerHTML = "Sin aprobar";
=======
                celdaTabla.innerHTML = "Sin contestar";
>>>>>>> 87abe65ea9fc49ad48de4a558df46dc8f529b8bd
            }
        }
    }

    document.getElementById("nivel").innerHTML = "Niveles completados: " + nivel + " de 16";
    document.getElementById("barra").value = nivel;
    
<<<<<<< HEAD
}
=======
}
>>>>>>> 87abe65ea9fc49ad48de4a558df46dc8f529b8bd
