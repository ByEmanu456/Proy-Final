/*
    !Proyecto final del semestre Programación SubI y SubIII
    JavaScript code for handeling user scores by: Esteban Flores Martínez
    ?Version: Server for Fonseca
*/

//!Función para obtener el usuario seleccionado
function getSelectedUser(callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../php/select_user.php?seleccionar=Seleccionar", true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            const selectedUser = JSON.parse(xhr.responseText);
            callback(selectedUser);
        }
    };
    xhr.send();
}

//!Función para subir el progreso del usuario seleccionado
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
}

//!Función para mostrar la calificación del examen deseado:
function calificacionExamen(indiceExamen){
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
}

window.onload = getSelectedUser;