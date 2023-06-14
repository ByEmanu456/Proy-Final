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
        <h2>Calcula el límite cuando 'x' tiende a 5</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA3/3_2_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label>10</label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label>-10</label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()""></label>
                </div>

                <div class="opcion">
                    <label>1/10</label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()" id="correcta"></label>
                </div>

                <div class="opcion">
                    <label>-1/10</label>
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
        <h2>Calcula el límite cuando 'x' tiende a 7</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA3/3_3_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label>7</label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label>1/14</label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()" id="correcta"></label>
                </div>

                <div class="opcion">
                    <label>1/7</label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label>-7</label>
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
        <h2>Calcula el límite cuando 'x' tiende a 1/2</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA3/3_4_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label>84/128</label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label>32/21</label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label>-32/21</label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label>-21/32</label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()" id="correcta"></label>
                </div>

            </form>

        </div>

        <input type="button" value="REVISAR" class="boton-revisar" id="boton-revisar" onclick="revisar()">
        `;

        break;

        case 5: contenido = `
                     
        <h1>Pregunta 5/10</h1>
        <hr>
        <h2>Calcula el límite cuando 'z' tiende a 2</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA3/3_5_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label> √7 </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> 49 </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> √14 </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> 7 </label>
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
        <h2>Calcula el límite cuando 'x' tiende a h</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA3/3_6_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label>2h<sup>2</sup></label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label>2h<sup>2</sup></label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label>h<sup>2</sup></label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label>h</label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()" id="correcta"></label>
                </div>

            </form>

        </div>

        <input type="button" value="REVISAR" class="boton-revisar" id="boton-revisar" onclick="revisar()">
        `;

        break;

        case 7: contenido = `
                     
        <h1>Pregunta 7/10</h1>
        <hr>
        <h2>Calcula el límite cuando 'x' tiende a 5x<sup>3</sup></h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA3/3_7_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label>15x<sup>2<sup></label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()" id="correcta"></label>
                </div>

                <div class="opcion">
                    <label>15x<sup>2</sup>+15xh+5h<sup>2</sup></label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label>-15x</label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label>15</label>
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
        <h2>Calcula el límite cuando 'x' tiende a 1/x</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA3/3_8_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label>1/x</label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label>-1/x<sup>2</sup></label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()" id="correcta"></label>
                </div>

                <div class="opcion">
                    <label>1/x<sup>2</sup></label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()""></label>
                </div>

                <div class="opcion">
                    <label> -1/(x<sup>2</sup>+hx)</label>
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
        <h2>Calcula el límite cuando 'x' tiende a 3x<sup>2</sup>-5x</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA3/3_9_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label> 6x - 5 </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"  id="correcta"></label>
                </div>

                <div class="opcion">
                    <label> 6x<sup>2</sup> + 5x </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> 6x + 5 </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> 1 / (6x - 5) </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

            </form>

        </div>

        <input type="button" value="REVISAR" class="boton-revisar" id="boton-revisar" onclick="revisar()">
        `;

        break;

        case 10: contenido = `
                     
        <h1>Pregunta 10/10</h1>
        <hr>
        <h2>Calcula el límite cuando 'a' tiende a 1</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA3/3_10_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label>13a + 6</label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label>19</label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()" id="correcta"></label>
                </div>

                <div class="opcion">
                    <label>13a - 6</label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label>7</label>
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
