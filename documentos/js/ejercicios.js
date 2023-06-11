
    function verRespuesta(num){
        let respuesta = document.getElementById("respuesta" + num);
        respuesta.classList.toggle("respuesta-visible");

        let procedimiento = document.getElementById("procedimiento" + num);
        procedimiento.classList.toggle("procedimiento-visible");

        let subtitulo = document.getElementById("subtitulo" + num);
        subtitulo.classList.toggle("subtitulo-visible");

        if(respuesta.classList.contains("respuesta-visible")){
            var parrafos = document.getElementsByClassName("imagen-texto");
            parrafos[num-1].innerHTML = "Ocultar respuesta";
        }

        else{
            var parrafos = document.getElementsByClassName("imagen-texto");
            parrafos[num-1].innerHTML = "Mostrar respuesta"; 
        }

        
    }

