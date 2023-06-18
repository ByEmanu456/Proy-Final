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
        <h2>Deriva la siguiente función</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA4/4_2_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label> 30x<sup>11</sup> </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> 30x<sup>9</sup> </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()" id="correcta"></label>
                </div>

                <div class="opcion">
                    <label> 10x<sup>30</sup> </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> 29x<sup>30</sup> </label>
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
        <h2>Deriva la siguiente función</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA4/4_3_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label> -9x<sup>-13/4</sup> </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()" id="correcta"></label>
                </div>

                <div class="opcion">
                    <label> 9x<sup>-13/4</sup> </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> -9x<sup>-5/4</sup> </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> 9x<sup>-5/4</sup> </label>
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
        <h2>Deriva la siguiente función</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA4/4_4_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label> 2x<sup>3</sup> - x - 2<sup>-1</sup> </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> 2x<sup>3</sup> + x + 2<sup>-1</sup> </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> 2x - x<sup>-2</sup> - 2x<sup>-3</sup> </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()" id="correcta"></label>
                </div>

                <div class="opcion">
                    <label> 2x + x<sup>-2</sup> + 2<sup>-3</sup> </label>
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
        <h2>Deriva la siguiente función</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA4/4_5_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label> 60x<sup>4</sup>+72x<sup>2</sup>+64x+13 </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()" id="correcta"></label>
                </div>

                <div class="opcion">
                    <label> 60x<sup>5</sup>+72x<sup>3</sup>+64x<sup>2</sup>+13 </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> 5x<sup>4</sup>+3x<sup>2</sup>+2x+13 </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> 17x<sup>4</sup>+27x<sup>2</sup>+34x+13 </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

            </form>

        </div>

        <input type="button" value="REVISAR" class="boton-revisar" id="boton-revisar" onclick="revisar()">
        `;

        break;

        case 6: contenido = `
                     
        <h1>Pregunta 6/10</h1>
        <hr>
        <h2>Deriva la siguiente función</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA4/4_6_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label> 785x<sup>3</sup>+70x<sup>2</sup>+78x </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> 785x<sup>2</sup>+70x+78 </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> 945x<sup>2</sup>+140x+153 </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> 917x<sup>2</sup>+134x+165 </label>
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
        <h2>Deriva la siguiente función</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA4/4_7_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label> 897x<sup>3</sup>+506x<sup>2</sup>+78x </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> 489x<sup>3</sup>+374x<sup>2</sup>+41x </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label> 897x<sup>2</sup>+506x+78 </label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()" id="correcta"></label>
                </div>

                <div class="opcion">
                    <label> 489x<sup>2</sup>+374x+41 </label>
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
        <h2>Deriva la siguiente función</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA4/4_8_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label>(120x<sup>4</sup>+8)/6x<sup>2</sup></label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()" id="correcta"></label>
                </div>

                <div class="opcion">
                    <label>(120x<sup>4</sup>-8)/6x<sup>2</sup></label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label>(120x<sup>4</sup>-8)/6x<sup></sup></label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()""></label>
                </div>

                <div class="opcion">
                    <label>(120x<sup>3</sup>-8)/6x<sup>2</sup></label>
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
        <h2>Deriva la siguiente función</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA4/4_9_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label>(3x-2)/(√(x+1))</label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label>(3x+2)/(√(x+1))</label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label>(3x-2)/(2√(x+1))</label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label>(3x+2)/(2√(x+1))</label>
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
        <h2>Deriva la siguiente función</h2>

        <div id="pregunta">
        
            <div class="imagen"><img src="../../imagenes/ejercicios/TEMA4/4_10_Problema.png" class="img"></div>
            <form>

                <div class="opcion">
                    <label>(4x-5)/(⁶√((5x+10)<sup>5</sup>))</label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label>(4x-5)/(⁵√((5x+10)<sup>6</sup>))</label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()" id="correcta"></label>
                </div>

                <div class="opcion">
                    <label>(4x+5)/(⁵√((5x+10)<sup>6</sup>))</label>
                    <label><input type="radio" name="respuestas" onfocus="opcionFocus()"></label>
                </div>

                <div class="opcion">
                    <label>(4x+5)/(⁶√((5x+10)<sup>5</sup>))</label>
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
