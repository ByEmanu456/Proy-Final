/*
    !Proyecto final del semestre Programación SubI y SubIII
    JavaScript code for selecting users in HTML by: Esteban Flores Martínez
    ?Version: Server for Fonseca
*/

//TODO: Función que te lleva al formulario:
function cargarFormulario(){
    //window.location.replace(//* ruta al formulario aquí *//)
    //!Borrar este reload de prueba:
    window.location.reload();
}

//!Función que muestra el usuario seleccionado:
function mostrarUsuario(usuario){
    let container = document.getElementById("usuario");
    let result = usuario.nombre + " " + usuario.apellidos;
    container.value = result;
}

//!Llamar a select_user.php para acceder a el usuario seleccionado:
function cargarUsuario(){
    const url = "../php/select_user.php?seleccionar=Seleccionar";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            let usuario = JSON.parse(xhr.responseText);
            console.log(usuario);
            mostrarUsuario(usuario);
        }
    };
    xhr.send();
}

//!Función para iniciar sessión (independientemente del usuario):
function iniciarSesion(event){
    event.preventDefault();
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;
    if(usuario != "" && contrasena != ""){
        let nombreApellidos = usuario.split(" ");
        let nombre = nombreApellidos[0];
        let apellidos = nombreApellidos.slice(1).join(" ");
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "../php/lectura_del_JSON.php", true);
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                const userData = JSON.parse(xhr.responseText);
                userData.forEach(user => {
                    if(user.nombre == nombre && user.apellidos == apellidos && user.contrasena == contrasena){
                        //!Solicitud de AJAX para seleccionar el usuario:
                        var xhr2 = new XMLHttpRequest();
                        xhr2.open("POST", "../php/select_user.php", true);
                        xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        xhr2.onload = function(){
                            if(xhr2.readyState === 4 && xhr2.status === 200){
                                console.log(xhr2.responseText);
                                cargarFormulario();
                            }
                        }
                        xhr2.send("newSelectedUser=" + encodeURIComponent(user.nombre+" "+user.apellidos));
                    }
                });
            }
        };
        xhr.send();
    }else{
        alert("Llene los campos para poder iniciar sesión.")
    }
    return false;
}

window.onload = cargarUsuario;