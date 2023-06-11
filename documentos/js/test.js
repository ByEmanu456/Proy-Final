var aciertos = 0;
var pregunta = 1;
var radios = document.getElementsByTagName('input');

function revisar(){
    
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) { 
        var opcionSelec = radios[i];
      } 
    }

    if(opcionSelec == undefined){ alert("Seleccione una opción") }

    else{
        
        if(document.getElementById("correcta").checked){

            opcionSelec.parentNode.parentNode.classList.add("opcion-correcta");
            aciertos++;
            efectoBoton();
            document.getElementById("boton-revisar").setAttribute("value","SIGUENTE");
            document.getElementById("boton-revisar").setAttribute("onclick","siguiente()");
        }
    
        else{
    
            opcionSelec.parentNode.parentNode.classList.add("opcion-incorrecta");
            efectoBoton();
            document.getElementById("boton-revisar").setAttribute("value","SIGUENTE");
            document.getElementById("boton-revisar").setAttribute("onclick","siguiente()");
        }
    
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].type === 'radio') { 
              radios[i].disabled = true;
            } 
        }
    
        var contenedores = document.getElementsByClassName("opcion");
    
        for (var i = 0; i < contenedores.length; i++){
            contenedores[i].classList.add("opcion-deshabilitada");
        }
    }
    
    
    
}

function siguiente(){
    efectoBoton()
    pregunta++;
    var contenido;

    switch(pregunta){
        
        case 2: contenido = `
                     
        <h1>Pregunta 2/10</h1>
        <hr>
        <h2>¿Cuál es la variable independiente en la siguiente ecuación?</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/ejercicio1.jpg" class="img"></div>
            <form>

                <div class="opcion">
                    <label> Hola </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> Hola </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()" id="correcta"></label>
                </div>

                <div class="opcion">
                    <label> Hola </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> Hola </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

            </form>

        </div>

        <input type="button" value="REVISAR" class="boton-revisar" id="boton-revisar" onclick="revisar()">
        `;

        break;

        case 3: contenido = `
                     
        <h1>Pregunta 3/10</h1>
        <hr>
        <h2>¿Cuál es la variable independiente en la siguiente ecuación?</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/ejercicio1.jpg" class="img"></div>
            <form>

                <div class="opcion">
                    <label> Hola </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> Hola </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()" id="correcta"></label>
                </div>

                <div class="opcion">
                    <label> Hola </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> Hola </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

            </form>

        </div>

        <input type="button" value="REVISAR" class="boton-revisar" id="boton-revisar" onclick="revisar()">
        `;

        break;

        case 4: contenido = `
                     
        <h1>Pregunta 4/10</h1>
        <hr>
        <h2>¿Cuál es la variable independiente en la siguiente ecuación?</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/ejercicio1.jpg" class="img"></div>
            <form>

                <div class="opcion">
                    <label> Hola </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> Hola </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()" id="correcta"></label>
                </div>

                <div class="opcion">
                    <label> Hola </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> Hola </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

            </form>

        </div>

        <input type="button" value="REVISAR" class="boton-revisar" id="boton-revisar" onclick="revisar()">
        `;

        break;

        case 5: contenido = `
                     
        <h1>Pregunta 5/10</h1>
        <hr>
        <h2>¿Cuál es la variable independiente en la siguiente ecuación?</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/ejercicio1.jpg" class="img"></div>
            <form>

                <div class="opcion">
                    <label> Hola </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> Hola </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()" id="correcta"></label>
                </div>

                <div class="opcion">
                    <label> Hola </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> Hola </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

            </form>

        </div>

        <input type="button" value="REVISAR" class="boton-revisar" id="boton-revisar" onclick="revisar()">
        `;

        break;

        case 6: contenido = `
                     
        <h1>Pregunta 4/10</h1>
        <hr>
        <h2>¿Cuál es la variable independiente en la siguiente ecuación?</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/ejercicio1.jpg" class="img"></div>
            <form>

                <div class="opcion">
                    <label> Hola </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> Hola </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()" id="correcta"></label>
                </div>

                <div class="opcion">
                    <label> Hola </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> Hola </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

            </form>

        </div>

        <input type="button" value="REVISAR" class="boton-revisar" id="boton-revisar" onclick="revisar()">
        `;

        break;

        case 7: 
        
        if(aciertos > 5){
            
            contenido=`
                <h1>Aciertos logrados</h1>
                <hr>
                <div class="aciertos-contenedor">
                    <div class="aciertos aciertos-aprobado"><p>` + aciertos +   `</p></div>
                    <p class="aciertos-resultado aciertos-resultado-aprobado">¡Pasas la prueba!</p>
                </div>
            `;

            document.getElementById("contenedor").classList.add("test-contenedor-aprobado");
        }

        else{
            contenido=`
                <h1>Aciertos logrados</h1>
                <hr>
                <div class="aciertos-contenedor">
                    <div class="aciertos aciertos-desaprobado"><p>` + aciertos +   `</p></div>
                    <p class="aciertos-resultado aciertos-resultado-desaprobado">No pasas la prueba... repasa e intenta de nuevo</p>
                </div>
            `;

            document.getElementById("contenedor").classList.add("test-contenedor-desaprobado");
        }

    }

    document.getElementById("contenedor").innerHTML = contenido;
}

function opcionFocus(){

    var contenedores = document.getElementsByClassName("opcion");

    for (var i = 0; i < contenedores.length; i++){
        if (contenedores[i].classList.contains("opcion-seleccionda")) { 
            contenedores[i].classList.remove("opcion-seleccionda");
        }
    }

    var opcionSelec = document.activeElement;

    console.log(opcionSelec);
    opcionSelec.parentNode.parentNode.classList.add("opcion-seleccionda");
}

function efectoBoton(){
    let boton = document.getElementById("boton-revisar");
    boton.classList.add("boton-revisar-click");
    setTimeout(function(){
        boton.classList.remove("boton-revisar-click");
    },150);
}
