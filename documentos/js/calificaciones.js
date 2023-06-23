/*
    !Proyecto final del semestre Programación SubI y SubIII
    JavaScript code for handeling user scores by: Esteban Flores Martínez
    ?Version: Server for Fonseca
*/

let selected_user;

//!Función para obtener el usuario seleccionado
function getSelectedUser(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../php/select_user.php?seleccionar=Seleccionar", true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            selected_user = JSON.parse(xhr.responseText);
        }
    };
    xhr.send();
}

//!Función para subir el progreso del usuario seleccionado
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
}

//!Función para mostrar la calificación del examen deseado:
function calificacionExamen(indiceExamen){
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
}

window.onload = getSelectedUser;