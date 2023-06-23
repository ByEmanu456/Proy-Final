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
            document.getElementById("boton-revisar").setAttribute("value","SIGUIENTE");
            document.getElementById("boton-revisar").setAttribute("onclick","siguiente()");
        }
    
        else{
    
            opcionSelec.parentNode.parentNode.classList.add("opcion-incorrecta");
            efectoBoton();
            document.getElementById("boton-revisar").setAttribute("value","SIGUIENTE");
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
    
    efectoBoton();
    efectoDesaparecer();

    pregunta++;
    var contenido;

    switch(pregunta){
        
        case 2: contenido = `
                     
        <h1>Pregunta 2/10</h1>
        <hr>
        <h2>¿Cuál es la variable dependiente de la siguiente ecuación?</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA1/1_2_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label> z </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"  id="correcta"></label>
                </div>

                <div class="opcion">
                    <label> x </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()""></label>
                </div>

                <div class="opcion">
                    <label> y </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> y<sup>2</sup> </label>
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
        <h2>¿Cuál es la variable independiente de la siguiente ecuación?</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA1/1_3_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label> x<sup>2</sup> </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> x<sup>2</sup> , x </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> x </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"  id="correcta"></label>
                </div>

                <div class="opcion">
                    <label> x<sup>2</sup> , 4x </label>
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
        <h2>¿Cuál es la constante absoluta de la siguiente ecuación?</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA1/1_4_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label> 4/3 </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> 𝝅 </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()" id="correcta"></label>
                </div>

                <div class="opcion">
                    <label> V </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> r </label>
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
        <h2>¿Cuál es la variable independiente de la siguiente ecuación?</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA1/1_5_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label> b </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> A </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> h </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> b , h </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()" id="correcta"></label>
                </div>

            </form>

        </div>

        <input type="button" value="REVISAR" class="boton-revisar" id="boton-revisar" onclick="revisar()">
        `;

        break;

        case 6: contenido = `
                     
        <h1>Pregunta 6/10</h1>
        <hr>
        <h2>¿Cuál es la variable independiente de la siguiente ecuación?</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA1/1_6_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label> y , z </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()" id="correcta"></label>
                </div>

                <div class="opcion">
                    <label> x </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> x , y , z </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> y<sup>2</sup> , y , z </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

            </form>

        </div>

        <input type="button" value="REVISAR" class="boton-revisar" id="boton-revisar" onclick="revisar()">
        `;

        break;

        case 7: contenido = `
                     
        <h1>Pregunta 7/10</h1>
        <hr>
        <h2>¿Cuál es la constante arbitraria de la siguiente ecuación?</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA1/1_7_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label> − 3/4 </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()" id="correcta"></label>
                </div>

                <div class="opcion">
                    <label> 3/4 </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> 2 </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> .75 </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

            </form>

        </div>

        <input type="button" value="REVISAR" class="boton-revisar" id="boton-revisar" onclick="revisar()">
        `;

        break;

        case 8: contenido = `
                     
        <h1>Pregunta 8/10</h1>
        <hr>
        <h2>¿Cuál es la variable independiente de la siguiente ecuación?</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA1/1_8_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label> y + 2 </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> y </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()" id="correcta"></label>
                </div>

                <div class="opcion">
                    <label> x </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> − y </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

            </form>

        </div>

        <input type="button" value="REVISAR" class="boton-revisar" id="boton-revisar" onclick="revisar()">
        `;

        break;

        case 9: contenido = `
                     
        <h1>Pregunta 9/10</h1>
        <hr>
        <h2>¿Cuál es la constante arbitraria de la siguiente ecuación?</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA1/1_9_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label> 7 </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> 7/8 </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> 2𝝅 </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> − 7/8 </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()" id="correcta"></label>
                </div>

            </form>

        </div>

        <input type="button" value="REVISAR" class="boton-revisar" id="boton-revisar" onclick="revisar()">
        `;

        break;

        case 10: contenido = `
                     
        <h1>Pregunta 10/10</h1>
        <hr>
        <h2>¿Cuál es la constante absoluta de la siguiente ecuación?</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA1/1_10_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label> c </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()" id="correcta"></label>
                </div>

                <div class="opcion">
                    <label> E </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> c<sup>2</sup> </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> m </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

            </form>

        </div>

        <input type="button" value="REVISAR" class="boton-revisar" id="boton-revisar" onclick="revisar()">
        `;

        break;

        case 11: 
        
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

        document.getElementsByClassName("boton-siguiente")[0].disabled = false;
        document.getElementsByClassName("boton-siguiente")[0].classList.remove("boton-deshabilitado");

    }

    setTimeout(function(){
        document.getElementById("contenedor").innerHTML = contenido;
    }, 500);
    
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

function efectoDesaparecer(){

    let contenedor = document.getElementById("contenedor");

    contenedor.classList.add("objetos-desaparecidos");

    setTimeout(function(){
        contenedor.classList.remove("objetos-desaparecidos");
    },550)

}
