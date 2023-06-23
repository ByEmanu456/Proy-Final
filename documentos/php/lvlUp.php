<?php
/*
    !Proyecto final del semestre Programación SubI y SubIII
    PHP code for changing the user's progress by: Esteban Flores Martínez.
    ?Versión: Server for Fonseca
*/

echo "\nArchivo lvlUp.php iniciado";

//Obtener los datos del JSON:
$jsonData = file_get_contents(__DIR__ . '/usuarios.JSON');
$usuarios_disponibles = json_decode($jsonData, true);

//!Manejo de la solicitud para subir la calificación de un examen del usuario
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    echo "\nBloque de código POST alcanzado";
    //Verificar si la solicitud de AJAX con los datos se efectuá correctamente:
    if(isset($_POST['user']) && isset($_POST['nivel']) && isset($_POST['examen']) && isset($_POST['calificacion'])){
        echo "entro";
        $usuarioAsubir = json_decode($_POST['user'], true);
        $niveles = array_values($usuarioAsubir['progreso']);
        $examenes = array_values($usuarioAsubir['examenes']);
        $calificado = false;
        $i = -1;
        foreach($usuarios_disponibles as $usuario){
            $i = $i + 1;
            if($usuario['nombre'].' '.$usuario['apellidos'] == $usuarioAsubir['nombre'].' '.$usuarioAsubir['apellidos']){

                if($_POST['calificacion'] > $usuarios_disponibles[$i]['examenes'][$_POST['examen']]){
                    $usuarios_disponibles[$i]['examenes'][$_POST['examen']] = $_POST['calificacion'];
                    file_put_contents(__DIR__ . '/usuarios.JSON', json_encode($usuarios_disponibles, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_FORCE_OBJECT));
                    echo "\nCalificación guardada";
                }

                $a = - 1;
                foreach($niveles as $nivel){
                    $a = $a + 1;
                    if($a == $_POST['nivel']){
                        if($nivel != true){

                            $usuarios_disponibles[$i]['progreso'][$_POST['nivel']] = true;
                                    
                            $calificado = true;

                            echo "\nProgreso del usuario actualizado";
                            file_put_contents(__DIR__ . '/usuarios.JSON', json_encode($usuarios_disponibles, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_FORCE_OBJECT));
                              
                            return; 
                            
                        }
                    }
                }
            }
        }
        if($calificado != true){
            echo "\nError al subir el progreso";
        }
    }
    else{
        echo "\nError al obtener la información con el método POST";
    }
}//!Manejo de la solicitud para subir el progreso del usuario
elseif($_SERVER['REQUEST_METHOD'] == 'GET'){
    echo "\nBloque de código GET alcanzado";
    //Verificar si la solicitud de AJAX con los datos se efectuá correctamente:
    if(isset($_GET['user']) && isset($_GET['nivel'])){
        $usuarioAsubir = json_decode($_GET['user'], true);
        $niveles = array_values($usuarioAsubir['progreso']);
        $calificado = false;
        $i = -1;
        foreach($usuarios_disponibles as $usuario){
            $i = $i + 1;
            if($usuario['nombre'].' '.$usuario['apellidos'] == $usuarioAsubir['nombre'].' '.$usuarioAsubir['apellidos']){
                $a = - 1;
                foreach($niveles as $nivel){
                    $a = $a + 1;
                    if($a == $_GET['nivel']){
                        echo "entro";
                        if ($nivel !== true) {
                            
                            $usuarios_disponibles[$i]['progreso'][$_GET['nivel']] = true;
                            $calificado = true;                          
                            
                            echo "\nProgreso del usuario actualizado";
                            file_put_contents(__DIR__ . '/usuarios.JSON', json_encode($usuarios_disponibles, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_FORCE_OBJECT));
                        
                            return;
                        }
                    }
                }
            }
        }
        if($calificado != true){
            echo "\nError al subir el progreso";
        }
    }
    else{
        echo "\nError al obtener la información con el método GET";
    }
}

?>