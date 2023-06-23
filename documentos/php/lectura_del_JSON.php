<?php
/*
    !Proyecto final del semestre Programación SubI y SubIII
    PHP code for the JSON access by: Esteban Flores Martínez.
    ?Versión: Server for Fonseca
*/

//Obtener los datos del JSON:
$jsonData = file_get_contents(__DIR__ . '/usuarios.JSON');
$usuarios_disponibles = json_decode($jsonData, true);

//!Enviar la matriz a JS cuando se haga la solicitud de AJAX:
echo json_encode($usuarios_disponibles);

?>