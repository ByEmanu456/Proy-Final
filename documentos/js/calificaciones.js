/*
    !Proyecto final del semestre Programación SubI y SubIII
    JavaScript code for handeling user scores by: Esteban Flores Martínez
    ?Version: Server for Fonseca
*/

<<<<<<< HEAD
let selected_user;

//!Función para obtener el usuario seleccionado
function getSelectedUser(){
=======
//!Función para obtener el usuario seleccionado
function getSelectedUser(callback){
>>>>>>> 87abe65ea9fc49ad48de4a558df46dc8f529b8bd
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../php/select_user.php?seleccionar=Seleccionar", true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
<<<<<<< HEAD
            selected_user = JSON.parse(xhr.responseText);
=======
            const selectedUser = JSON.parse(xhr.responseText);
            callback(selectedUser);
>>>>>>> 87abe65ea9fc49ad48de4a558df46dc8f529b8bd
        }
    };
    xhr.send();
}

//!Función para subir el progreso del usuario seleccionado
<<<<<<< HEAD
function lvlUp(nivel){
    getSelectedUser();
    const params = "user=" + encodeURIComponent(JSON.stringify(selected_user))
                   +"&nivel=" + encodeURIComponent(nivel);

    const url = "../php/lvlUp.php?" + params;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr.responseText);
            console.log("Progreso actualizado...")
            location.href = "index.html";
        }
    };
    xhr.send();
}

//!Función para calificar un examen del usuario seleccionado
function lvlUpExamen(nivel, indiceExamen, calificacion){
    getSelectedUser();
    const params = "user=" + encodeURIComponent(JSON.stringify(selected_user))
                   +"&nivel=" + encodeURIComponent(nivel)
                   +"&examen=" + encodeURIComponent(indiceExamen)
                   +"&calificacion=" + encodeURIComponent(calificacion);

    const url = "../php/lvlUp.php?" + params;

    if(calificacion >= 6){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onload = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                console.log(xhr.responseText);
                console.log("Calificación aprobatoria...")
                location.href = "index.html";
            }
        };
        xhr.send(params);
    }else{
        console.log("Calificación reprobatoria...")
        location.href = "index.html";
    }
=======
function lvlUpSelectedUser(){
    getSelectedUser(function(selectedUser){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "../php/select_user.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onload = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr.responseText);
            }
        };
        xhr.send("newSelectedUser=" + encodeURIComponent(selectedUser));
    });
}

//!Función para calificar un examen del usuario seleccionado
function calificarExamenSelectedUser(indiceExamen, calificacion){
    getSelectedUser(function (selectedUser){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "../php/select_user.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onload = function(){
            if (xhr.readyState === 4 && xhr.status === 200){
                console.log(xhr.responseText);
            }
        };
        xhr.send(
            "newSelectedUser=" +
            encodeURIComponent(selectedUser) +
            "&indiceExamen=" +
            indiceExamen +
            "&calificacion=" +
            calificacion
        );
    });
}

//!Función que sirve para calificar al usuario seleccionado y redireccionar al siguiente paso:
function lvlUpYRedireccionar(link_de_la_pagina){
    lvlUpSelectedUser(); //*Subir el progreso del usuario seleccionado
    //Redireccionar a la siguiente parte de la página
    window.location.href = link_de_la_pagina;
    //!#region Recomendación:
    //*Se podría hacer algo como esto:
    //*Habiendo completado el ejercicio,
    //*Subir el progreso del usuario y
    //*Redireccionar al menú de ejercicios, o al siguiente
    //?Preferentemente en un onclick="" del botón
    //?que termina el ejercicio.
    //!#endregion
    //#region Ejemplo:
    //?HTML en 1-ejercicios.html:
    //?<button id="terminar" onclick="lvlUpYRedireccionar('index.html')" >Terminar</button>
    //#endregion
}

//!Función que sirve para calificar el examen del usuario seleccionado y subir su nivel:
function examen_lvlUp(indiceExamen, calificacion, link_de_la_pagina){
    calificarExamenSelectedUser(indiceExamen, calificacion); //*Calificar el examen del usuario seleccionado
    lvlUpSelectedUser(); //*Subir el progreso del usuario seleccionado

    //Redireccionar a la siguiente parte de la página
    window.location.href = link_de_la_pagina;
    //!#region Recomendación:
    //*Se podría hacer algo como esto:
    //*Habiendo completado el examen 
    //*Y, calificando el examen,
    //*Subir el progreso del usuario y
    //*Redireccionar al menú de ejercicios, o al siguiente
    //?Preferentemente en un onclick="" del botón
    //?que termina el examen y lo evalua.
    //!#endregion
    //#region Ejemplo:
    //?HTML en 1-test.html:
    //*En alguna parte de la página definir el examen que
    //*se va a calificar
    //?<button id="terminar" onclick="examen_lvlUp(index, calificacion(),'index.html')" >Terminar</button>
    //*Supongamos que la fución que califica el examen
    //*calificacion() toma los valores y retorna
    //*la calificación correspondiente en tipo number
    //#endregion
>>>>>>> 87abe65ea9fc49ad48de4a558df46dc8f529b8bd
}

//!Función para mostrar la calificación del examen deseado:
function calificacionExamen(indiceExamen){
<<<<<<< HEAD
    getSelectedUser();

    //Obtener la calificación del usuario en el examen deseado
    const calificacion = selected_user.examenes[indiceExamen];
    //Evaluar y mostrar visualmente la calificación
    if(calificacion == 10){
        console.log("Excelente");
    }else if(calificacion >= 6){
        console.log("Aprobado");
    }else{
        console.log("Reprobado");
    }
    //?Esta función podría ser llamada
    //?para mostrar la calificación del examen
    //?y así poder cambiar el color del Halo
    //?de los radiobuttons de los examenes.
    //?Solo modifica esta función como te convenga...
=======
    getSelectedUser(function(selectedUser){
        //Obtener la calificación del usuario en el examen deseado
        const calificacion = selectedUser.examenes[indiceExamen];

        //Evaluar y mostrar visualmente la calificación
        if(calificacion == 10){
            console.log("Excelente");
        }else if(calificacion >= 6){
            console.log("Aprobado");
        }else{
            console.log("Reprobado");
        }
    });
    //?Esta función podría ser llamada
    //?para mostrar la calificación del examen
    //?y así poder cambiar el color del Halo
    //?de los radiobuttons de los examenes
>>>>>>> 87abe65ea9fc49ad48de4a558df46dc8f529b8bd
}

window.onload = getSelectedUser;