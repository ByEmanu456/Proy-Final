<?php
/*
    !Proyecto final del semestre Programación SubI y SubIII
    PHP code for users by: Esteban Flores Martínez.
    ?Versión: Server for Fonseca
*/

echo "\nArchivo usuarios.php iniciado";

//Recibir los datos del JSON
$jsonData = file_get_contents(__DIR__ . '/usuarios.JSON');
$usuarios_disponibles = json_decode($jsonData, true);

//!Función que registra un usuario nuevo en la matriz y el JSON:
function registrar($usuarioNuevo){
    echo "\nFuncion registrar usuario iniciada";
    global $usuarios_disponibles;
    
    //Comprobar si el usuario ya existe:
    foreach ($usuarios_disponibles as $usuario) {
        if(($usuario['nombre'] == $usuarioNuevo['nombre']) && ($usuario['apellidos'] == $usuarioNuevo['apellidos'])){
            echo "\nEl usuario ya existe";
            //Salir de la función sin registrar el usuario repetido
            return;
        }
    }
    echo "\nUsuario registrado";
    $usuarios_disponibles[] = $usuarioNuevo;
    //Guardar los datos actualizados en el JSON:
    file_put_contents(__DIR__ . '/usuarios.JSON', json_encode($usuarios_disponibles, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_FORCE_OBJECT));
}

//!Función que elimina un usuario registrado:
function eliminar($usuarioAeliminar){
    echo "\nFuncion eliminar usuario iniciada";
    global $usuarios_disponibles;
    
    //Buscar el usuario a eliminar en la matriz
     foreach($usuarios_disponibles as $indice => $usuario){
        if(
            $usuario['nombre'] == $usuarioAeliminar['nombre'] &&
            $usuario['apellidos'] == $usuarioAeliminar['apellidos'] &&
            $usuario['fecha_nacimiento'] == $usuarioAeliminar['fecha_nacimiento'] &&
            $usuario['color'] == $usuarioAeliminar['color'] &&
            $usuario['genero'] == $usuarioAeliminar['genero'] &&
            $usuario['semestre'] == $usuarioAeliminar['semestre'] &&
            $usuario['especialidad'] == $usuarioAeliminar['especialidad'] &&
            $usuario['contrasena'] == $usuarioAeliminar['contrasena'] &&
            $usuario['progreso'] == $usuarioAeliminar['progreso'] &&
            $usuario['examenes'] == $usuarioAeliminar['examenes']
        ){
            $eliminado = true;
            unset($usuarios_disponibles[$indice]);
            echo "\nUsuario eliminado";
            //Reindexar los elementos restantes
            $usuarios_disponibles = array_values($usuarios_disponibles);
            //Guardar los datos actualizados en el JSON:
            file_put_contents(__DIR__ . '/usuarios.JSON', json_encode($usuarios_disponibles, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_FORCE_OBJECT));
            //Salir de la función después de eliminar el usuario
            return;
        }
        else{
            $eliminado = false;
        }
    }
    if($eliminado == false){
        echo "\nEl usuario no existe";
    }
}

//!Función que resetea el progreso de un usuario:
function resetear($usuarioAresetear){
    echo "\nFuncion resetear progreso iniciada";
    global $usuarios_disponibles;
    
    //Buscar el usuario a resetear en la matriz
     foreach($usuarios_disponibles as $indice => $usuario){
        if(
            $usuario['nombre'] == $usuarioAresetear['nombre'] &&
            $usuario['apellidos'] == $usuarioAresetear['apellidos'] &&
            $usuario['fecha_nacimiento'] == $usuarioAresetear['fecha_nacimiento'] &&
            $usuario['color'] == $usuarioAresetear['color'] &&
            $usuario['genero'] == $usuarioAresetear['genero'] &&
            $usuario['semestre'] == $usuarioAresetear['semestre'] &&
            $usuario['especialidad'] == $usuarioAresetear['especialidad'] &&
            $usuario['contrasena'] == $usuarioAresetear['contrasena'] &&
            $usuario['progreso'] == $usuarioAresetear['progreso'] &&
            $usuario['examenes'] == $usuarioAresetear['examenes']
        ){
            $progreso = array(
                0 => false, 1 => false, 2 => false, 3 => false,
                4 => false, 5 => false, 6 => false, 7 => false,
                8 => false, 9 => false, 10 => false, 11 => false,
                12 => false, 13 => false, 14 => false, 15 => false,
            );
            $examenes = array(
                0 => 0, 1 => 0, 2 => 0, 3 => 0,
            );
            $resteado = true;
            $usuarios_disponibles[$indice]['progreso'] = $progreso;
            $usuarios_disponibles[$indice]['examenes'] = $examenes;
            echo "\nUsuario reseteado";
            //Guardar los datos actualizados en el JSON:
            file_put_contents(__DIR__ . '/usuarios.JSON', json_encode($usuarios_disponibles, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_FORCE_OBJECT));
            //Salir de la función después de resetear el usuario
            return;
        }else{
            $resteado = false;
        }
    }
    if($resteado == false){
        echo "\nEl usuario no existe";
    }
}

//!Función para subir el progreso de un usuario:
function lvlUp($usuario){
    echo "\nFuncion subir progreso iniciada";
    global $usuarios_disponibles;

    foreach($usuarios_disponibles as &$usuario_actual){
        if($usuario_actual['nombre'] == $usuario['nombre'] && $usuario_actual['apellidos'] == $usuario['apellidos']){
            $progreso = &$usuario_actual['progreso'];

            //Buscar el siguiente nivel de progreso que sea false y marcarlo como true
            foreach ($progreso as $nivel => $valor) {
                if(!$valor){
                    $progreso[$nivel] = true;
                    break;
                }
            }
            $progresar = true;
            // Guardar los datos actualizados en el JSON
            file_put_contents(__DIR__ . '/usuarios.JSON', json_encode($usuarios_disponibles, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_FORCE_OBJECT));
            echo "\nEl usuario subió su progreso";
            return;
        }
        else{
            $progresar = false;
        }
    }
    if($progresar == false){
        echo "\nEl usuario no existe";
    }
}

//!Función para calificar un examen
function calificarExamen($usuario, $indiceExamen, $calificacion){
    echo "\nFuncion calificar examen iniciada";
    global $usuarios_disponibles;

    foreach($usuarios_disponibles as &$usuario_actual){
        if($usuario_actual['nombre'] == $usuario['nombre'] && $usuario_actual['apellidos'] == $usuario['apellidos']){
            $examenes = &$usuario_actual['examenes'];

            //Verificar si el índice del examen existe y asignarle la calificación
            if(isset($examenes[$indiceExamen])){
                $examenes[$indiceExamen] = $calificacion;

                // Guardar los datos actualizados en el JSON
                file_put_contents(__DIR__ . '/usuarios.JSON', json_encode($usuarios_disponibles, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_FORCE_OBJECT));
                echo "\nExamen del usuario calificado";
                return;
            }else{
                echo "\nEl índice del examen no existe";
                return;
            }
        }
    }
    echo "\nEl usuario no existe";
}

?>