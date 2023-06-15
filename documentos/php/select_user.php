<?php
/*
    !Proyecto final del semestre Programación SubI y SubIII
    PHP code for selecting users by: Esteban Flores Martínez.
    ?Versión: Server for Fonseca
*/

//Recibir el usuario seleccionado:
$selectedUser = file_get_contents(__DIR__ . '/selectedUser.txt');

function cambiar($newSelectedUser){
    echo "\nFunción cambiar usuario seleccionado iniciada";
    if(!empty($newSelectedUser)){
        file_put_contents(__DIR__ . '/selectedUser.txt', $newSelectedUser);
        echo "\nUsuario seleccionado actualizado";
    }else{
        echo "\nUsuario seleccionado no actualizado";
    }
}

//!Manejo de la solicitud para seleccionar un usuario nuevo:
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    //Verificar si la solicitud de AJAX con los datos se efectuó correctamente:
    if(isset($_POST['newSelectedUser'])){
        if(!empty($_POST['newSelectedUser'])){
            cambiar($_POST['newSelectedUser']);
        }
    }
}//!Manejo de la solicitud para obtener los datos del usuario seleccionado:
elseif($_SERVER['REQUEST_METHOD'] == 'GET'){
    //Verificar si la solicitud de AJAX con los datos se efectuó correctamente:
    if(isset($_GET['seleccionar'])){
        //Obtener los datos del JSON:
        $jsonData = file_get_contents(__DIR__ . '/usuarios.JSON');
        $usuarios_disponibles = json_decode($jsonData, true);
        foreach($usuarios_disponibles as $usuario){
            if($usuario['nombre'].' '.$usuario['apellidos'] == $selectedUser){
                echo json_encode($usuario);
                break;
            }
        }
    }
}

?>