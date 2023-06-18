<?php
/*
    !Proyecto final del semestre Programación SubI y SubIII
    PHP code for data handling by: Esteban Flores Martínez.
    ?Versión: Server for Fonseca
*/

echo "\nArchivo manejo_de_datos.php iniciado";

//!Manejo de la solicitud para crear un usuario nuevo:
if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['enviar'])){
    echo "\nBloque de código POST alcanzado";
    //Verificar si la solicitud de AJAX con los datos se efectuó correctamente:
    if(
        isset($_POST['nombre']) && isset($_POST['apellidos']) &&
        isset($_POST['fecha_nacimiento']) && isset($_POST['genero']) &&
        isset($_POST['semestre']) && isset($_POST['especialidad']) &&
        isset($_POST['contrasena'])
    ){
        //Crear el progreso inicial del usuario nuevo:
        $progreso = array(
            false, false, false, false,
            false, false, false, false,
            false, false, false, false,
            false, false, false, false,
        );
        $examenes = array(
            0, 0, 0, 0,
        );
        //Crear usuario a ingresar:
        $new_user = array(
            "nombre" => $_POST['nombre'],
            "apellidos" => $_POST['apellidos'],
            "fecha_nacimiento" => $_POST['fecha_nacimiento'],
            "genero" => $_POST['genero'],
            "semestre" => $_POST['semestre'],
            "especialidad" => $_POST['especialidad'],
            "contrasena" => $_POST['contrasena'],
            "progreso" => $progreso,
            "examenes" => $examenes,
        );
        include 'usuarios.php';
        registrar($new_user);
    }
}//!Manejo de la solicitud para eliminar un usuario disponible:
elseif($_SERVER['REQUEST_METHOD'] == 'GET'){
    echo "\nBloque de código GET alcanzado";
    //Verificar si la solicitud de AJAX con los datos se efectuó correctamente:
    if(isset($_GET['usuario_a_eliminar'])){
        //Crear el usuario a eliminar:
        $deleteUser = json_decode($_GET['usuario_a_eliminar'], true);
        include 'usuarios.php';
        eliminar($deleteUser);
    }
}

?>