/*
    !Proyecto final del semestre Programación SubI y SubIII
    JavaScript code for showing users in HTML by: Esteban Flores Martínez
    ?Version: Server for Fonseca
*/

//!Función que muestra los usuarios en el HTML:
function mostrarUsuarios(usuarios){
    let container = document.getElementById("usuarios");
    let result = "";
    //!#Region Estructura de los usuarios:
    //  '<div class="user">'
    //      '<label> '+usuario.nombre +' '+usuario.apellidos+' </label>'
    //      '<label><input type="radio" name="usuarios"></label>'
    //  '</div>'
    //#EndRegion
    usuarios.forEach(usuario => {
        result += '<div class="user"><label> '+
                  usuario.nombre+' '+usuario.apellidos+
                  '</label><label><input type="radio" name="usuarios">'+
                  '</label></div>';
    })
    container.innerHTML = result;
}

//!Función que te regresa a la página anterior con el usuario seleccionado:
function goBack(){
    window.location.replace(document.referrer);
}

//!Función que llama a usuarios.php para acceder a los usuarios:
function cargarUsuarios(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../php/lectura_del_JSON.php", true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            const usuarios = JSON.parse(xhr.responseText);
            //La variable 'usuarios' contiene los datos de la matriz
            console.log("Matriz que contiene los usuarios:");
            console.log(usuarios);
            mostrarUsuarios(usuarios);
        }
    };
    xhr.send();
}

//!Función que trata de eliminar al usuario seleccionado:
function eliminar(event){
    event.preventDefault();
    
    let usuarios = document.getElementsByClassName("user");
    usuarios = Array.from(usuarios);
    let usuarioAeliminar = "";
    for(let i = 0; i < usuarios.length; i++){
        let input = usuarios[i].getElementsByTagName("label");
        input = Array.from(input);
        input = input[1].getElementsByTagName("input");
        input = Array.from(input);
        input = input[0];
        if(input.checked == true){
            usuarioAeliminar = i;
            console.log("Index del usuario a eliminar:" + usuarioAeliminar);
        }
    }
    if(usuarioAeliminar != ""){
        //!Solicitud de AJAX para buscar el usuario en el JSON:
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "../php/lectura_del_JSON.php", true);
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                const usuarios = JSON.parse(xhr.responseText);
                deleteUser = usuarios[usuarioAeliminar];
                console.log("Usuario a eliminar de la matriz:" + deleteUser);

                respuesta = prompt("Confirme la contraseña del usuario a eliminar:");
                if(respuesta == deleteUser.contrasena){
                    if(confirm("¿Seguro que desea eliminar el usuario?")){
                        const params = "usuario_a_eliminar=" + encodeURIComponent(JSON.stringify(deleteUser));
                        const url = "../php/manejo_de_datos.php?" + params;

                        //!Solicitud de AJAX para eliminar el usuario:
                        const xhr = new XMLHttpRequest();
                        xhr.open("GET", url, true);
                        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        xhr.onload = function(){
                            if(xhr.status === 200){
                                console.log(xhr.responseText);
                                cargarUsuarios();
                                alert("Usuario eliminado.");
                            }
                        };
                        xhr.send(params);
                    }else{
                        alert("Operación cancelada.");
                    }
                }else{
                alert("Contraseña incorrecta.");
                }
            }
        };
        xhr.send();
    }else{
        alert("Selecione un usuario para eliminar.");
    }
}

function seleccionar(){
    let usuarios = document.getElementsByClassName("user");
    usuarios = Array.from(usuarios);
    let selectedUser = "";
    for(let i = 0; i < usuarios.length; i++){
        let input = usuarios[i].getElementsByTagName("label");
        input = Array.from(input);
        input = input[1].getElementsByTagName("input");
        input = Array.from(input);
        input = input[0];
        if(input.checked == true){
            selectedUser = i;
            console.log("Index del usuario seleccionado:" + selectedUser);
            if(selectedUser >= 0 && selectedUser < usuarios.length){
                //!Solicitud de AJAX para buscar el usuario en el JSON:
                var xhr = new XMLHttpRequest();
                xhr.open("GET", "../php/lectura_del_JSON.php", true);
                xhr.onreadystatechange = function(){
                    if(xhr.readyState === 4 && xhr.status === 200){
                        const userData = JSON.parse(xhr.responseText);
                        selectedUser = userData[selectedUser].nombre+" "+userData[selectedUser].apellidos;
                        console.log("Usuario seleccionado:" + selectedUser);

                        //!Solicitud de AJAX para seleccionar el usuario:
                        var xhr2 = new XMLHttpRequest();
                        xhr2.open("POST", "../php/select_user.php", true);
                        xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        xhr2.onload = function(){
                            if(xhr2.readyState === 4 && xhr2.status === 200){
                                console.log(xhr2.responseText);
                                goBack();
                            }
                        }
                        xhr2.send("newSelectedUser=" + encodeURIComponent(selectedUser));
                    }
                }
                xhr.send();
            }
        }
    }
}

window.onload = cargarUsuarios();