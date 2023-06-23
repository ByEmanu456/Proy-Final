
var radios_panel1 = `

    <hr class="nivel-barra" id="barra1">

    <div class="nivel-contenedor" id="nivel1">
        <label>1</label>
        <label><input type="radio" name="usuario" id="radio1" onfocus="radio1focus()"></label>
    </div>

    <hr class="nivel-barra" id="barra2">

    <div class="nivel-contenedor" id="nivel2">
        <label>2</label>
        <label><input type="radio" name="usuario" id="radio2" onfocus="radio2focus()"></label>
    </div>

    <hr class="nivel-barra" id="barra3">

    <div class="nivel-contenedor" id="nivel3">
        <label>3</label>
        <label><input type="radio" name="usuario" id="radio3" onfocus="radio3focus()"></label>
    </div>

    <hr class="nivel-barra" id="barra4">

    <div class="nivel-contenedor" id="nivel4">
        <label>4</label>
        <label><input type="radio" name="usuario" id="radio4" onfocus="radio4focus()"></label>
    </div>

    <hr class="nivel-barra" id="barra5">

`;

var radios_panel2 = `

    <hr class="nivel-barra" id="barra6">

    <div class="nivel-contenedor" id="nivel5">
        <label>5</label>
        <label><input type="radio" name="usuario" id="radio5" onfocus="radio5focus()"></label>
    </div>

    <hr class="nivel-barra" id="barra7">

    <div class="nivel-contenedor" id="nivel6">
        <label>6</label>
        <label><input type="radio" name="usuario" id="radio6" onfocus="radio6focus()"></label>
    </div>

    <hr class="nivel-barra" id="barra8">

    <div class="nivel-contenedor" id="nivel7">
        <label>7</label>
        <label><input type="radio" name="usuario" id="radio7" onfocus="radio7focus()"></label>
    </div>

    <hr class="nivel-barra" id="barra9">

    <div class="nivel-contenedor" id="nivel8">
        <label>8</label>
        <label><input type="radio" name="usuario" id="radio8" onfocus="radio8focus()"></label>
    </div>

    <hr class="nivel-barra" id="barra10">

`;

var radios_panel3 = `

    <hr class="nivel-barra" id="barra11">

    <div class="nivel-contenedor" id="nivel9">
        <label>9</label>
        <label><input type="radio" name="usuario" id="radio9" onfocus="radio9focus()"></label>
    </div>

    <hr class="nivel-barra" id="barra12">

    <div class="nivel-contenedor" id="nivel10">
        <label>10</label>
        <label><input type="radio" name="usuario" id="radio10" onfocus="radio10focus()"></label>
    </div>

    <hr class="nivel-barra" id="barra13">

    <div class="nivel-contenedor" id="nivel11">
        <label>11</label>
        <label><input type="radio" name="usuario" id="radio11" onfocus="radio11focus()"></label>
    </div>

    <hr class="nivel-barra" id="barra14">

    <div class="nivel-contenedor" id="nivel12">
        <label>12</label>
        <label><input type="radio" name="usuario" id="radio12" onfocus="radio12focus()"></label>
    </div>

    <hr class="nivel-barra" id="barra15">

`;

var radios_panel4 = `

    <hr class="nivel-barra" id="barra16">

    <div class="nivel-contenedor" id="nivel13">
        <label>13</label>
        <label><input type="radio" name="usuario" id="radio13" onfocus="radio13focus()"></label>
    </div>

    <hr class="nivel-barra" id="barra17">

    <div class="nivel-contenedor" id="nivel14">
        <label>14</label>
        <label><input type="radio" name="usuario" id="radio14" onfocus="radio14focus()"></label>
    </div>

    <hr class="nivel-barra" id="barra18">

    <div class="nivel-contenedor" id="nivel15">
        <label>15</label>
        <label><input type="radio" name="usuario" id="radio15" onfocus="radio15focus()"></label>
    </div>

    <hr class="nivel-barra" id="barra19">

    <div class="nivel-contenedor" id="nivel16">
        <label>16</label>
        <label><input type="radio" name="usuario" id="radio16" onfocus="radio16focus()"></label>
    </div>

    <div class="nivel-corona" id="corona">
        <img src="../../imagenes/corona.png" height="40px" width="40px">
    </div>

`;

function panelActual(){

    if(n_panel==4){ n_panel = 3 }

    if(n_panel == 0){
        document.getElementById("titulo").innerHTML = '<div class="titulo-nombre"><h1>Variables y constantes</h1></div><div class="titulo-numero"><h1>1</h1></div>'
        document.getElementById("niveles").innerHTML = radios_panel1;
        inhabilitarBoton(1);
    }

    else if(n_panel == 1){
        document.getElementById("titulo").innerHTML = '<div class="titulo-nombre"><h1>Funciones matemáticas</h1></div><div class="titulo-numero"><h1>2</h1></div>'
        document.getElementById("niveles").innerHTML = radios_panel2;
    }

    else if(n_panel == 2){
        document.getElementById("titulo").innerHTML = '<div class="titulo-nombre"><h1>Límites</h1></div><div class="titulo-numero"><h1>3</h1></div>'
        document.getElementById("niveles").innerHTML = radios_panel3;
    }

    else if(n_panel == 3){
        document.getElementById("titulo").innerHTML = '<div class="titulo-nombre"><h1>Derivada de una función</h1></div><div class="titulo-numero"><h1>4</h1></div>'
        document.getElementById("niveles").innerHTML = radios_panel4;
        inhabilitarBoton(2); 
    }
} 

//RADIOS DEL TEMA 1

function radio1focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>1.1 Video Explicativo</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>VIDEO</h1> <br>
        <p>En este video podrás aprender sobre, ¿Qué son las constantes y las variables? ¿Qué tipos hay? y algunos ejemplos de las mismas, es necesario que pongas atención, pues en futuras clases tendrás que hacer ejercicios.</p><br>
        <p>Autor: Angel Caled Veneroso Vela</p>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='1-video.html'"></input> `;

    var contenedor = document.getElementById("nivel1");
    radioSelec(contenedor);

    elementoFocus = 1;
};

function radio2focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>1.2 Documento de conceptos</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>INFORMACIÓN</h1> <br>
        <p>¿No fué suficiente con el video? Accede a más información acerca de las variables y constantes para que conozcas aún más sobre el tema, procura leer todo el archivo antes de terminar la actividad, te será de utilidad para que hagas los ejercicios</p> <br>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='1-informacion.html'"></input> `;

    var contenedor = document.getElementById("nivel2");
    radioSelec(contenedor);

    elementoFocus = 2;
};

function radio3focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>1.3 Ejercicios de práctica</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>EJERCICIOS</h1> <br>
<<<<<<< HEAD
        <p>Para estos ejercicios no necesitas más que pensar un poco e identificar lo que se te pide, no te preocupes, te proporcionaremos las respuestas pero preparate ya que la siguiente actividad es un test y tienes que aprobar para avanzar! </p> <br>
=======
        <p>Para estos ejercicios no necesitas más que pensar un poco e identificar lo que se te pide, no te preocupes, te proporcionaremos las respuestas pero preaparate ya que la siguiente actividad es un test y tienes que aprobar para avanzar! </p> <br>
>>>>>>> 87abe65ea9fc49ad48de4a558df46dc8f529b8bd
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='1-ejercicios.html'"></input> `;

    var contenedor = document.getElementById("nivel3");
    radioSelec(contenedor);

    elementoFocus = 3;
};

function radio4focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>1.4 Examen evaluativo</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>TEST</h1> <br>
        <p>Identifica lo que se te pide en el siguiente examen, escoje una de las 4 posibles respuestas, puedes tomarte el tiempo que necesites. Obten almenos un 6 de califiación para poder continuar!</p> <br>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='1-test.html'"></input> `;

    var contenedor = document.getElementById("nivel4");
    radioSelec(contenedor);

    elementoFocus = 4;
};

//RADIOS DEL TEMA 2

function radio5focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>2.1 Video Explicativo</h4>';
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>VIDEO</h1> <br>
        <p>Ve el siguiente video y aprende ¿Qué es una función? ¿Qué caracteristicas tiene? ¿Cómo se comportan? ¿Qué tipos hay? y otras cosas sobre las mismas, proximamante te enseñaremos a evaluar funciones.</p> <br>
        <p>Autor: José Francisco Saavedra Oloarte</p>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='2-video.html'"></input> `;

    var contenedor = document.getElementById("nivel5");
    radioSelec(contenedor);

    elementoFocus = 5;
};

function radio6focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>2.2 Documento de conceptos</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>INFORMACIÓN</h1> <br>
        <p>Aquí tienes la información fundamental del video anterior, los conceptos que aquí leerás son imprescindibles para poder entender las funciones y su comportamiento.</p> <br>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='2-informacion.html'"></input> `;

    var contenedor = document.getElementById("nivel6");
    radioSelec(contenedor);

    elementoFocus = 6;
};

function radio7focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>2.3 Ejercicios de práctica</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>EJERCICIOS</h1> <br>
        <p>Toma lapiz o pluma para resolver los siguientes ejercicios sobre evaluar funciones, tambien te proporcionaremos las respuestas y el procedimiento, pero preparate ya que el exámen no será tan fácil como el anterior. </p> <br>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='2-ejercicios.html'"></input> `;

    var contenedor = document.getElementById("nivel7");
    radioSelec(contenedor);

    elementoFocus = 7;
};

function radio8focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>2.4 Examen evaluativo</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>TEST</h1> <br>
        <p>Resuelve el siguiente test sobre funciones para poder continuar, tomate tu tiempo. Recuerda que tienes que obtener almenos un 6 de califiación para poder continuar!</p> <br>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='2-test.html'"></input> `;

    var contenedor = document.getElementById("nivel8");
    radioSelec(contenedor);

    elementoFocus = 8;
};

//RADIOS DEL TEMA 3

function radio9focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>3.1 Video explicativo</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>VIDEO 3</h1> <br>
        <p>Observa el video para que puedas entender como evaluar límites, la dificultad va aumentando por lo que los videos son algo mas extensos, aún así debes poner atención para realizar los próximos ejercicios.</p> <br>
        <p>Autor: Jesús Esteban Zarate Vidaña</p>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='3-video.html'"></input> `;

    var contenedor = document.getElementById("nivel9");
    radioSelec(contenedor);

    elementoFocus = 9;
};

function radio10focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>3.2 Documento de conceptos</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>INFORMACIÓN</h1> <br>
        <p>Entiende con la ayuda de este documento: ¿Qué son los límites? ¿Qué es un límite indefinido? y ¿Qué hacer si encuentras uno?, procuramos hacerlos breves y concisos para que no te aburras.</p> <br>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='3-informacion.html'"></input> `;

    var contenedor = document.getElementById("nivel10");
    radioSelec(contenedor);

    elementoFocus = 10;
};

function radio11focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>3.3 Ejercicios de práctica</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>EJERCICIOS</h1> <br>
        <p>Aquí tendrás que retomar tu lápiz y borrador para evaluar los siguientes límites, el siguiente tema son derivadas, así que presta atención al procedimiento que te proporcionamos de cada ejercicio para que puedas entenderlo a la perfección.</p> <br>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='3-ejercicios.html'"></input> `;

    var contenedor = document.getElementById("nivel11");
    radioSelec(contenedor);

    elementoFocus = 11;
};

function radio12focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>3.4 Examen evaluativo </h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>TEST</h1> <br>
        <p>Este test es sobre límites, necesitarás alguna hoja en blanco para que puedas resolver los problemas. Necesitas un 6 como mínimo para poder pasar así que tomate tu tiempo!</p> <br>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='3-test.html'"></input> `;

    var contenedor = document.getElementById("nivel12");
    radioSelec(contenedor);

    elementoFocus = 12;
};

//RADIOS DEL TEMA 4

function radio13focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>4.1 Video explicativo</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>VIDEO</h1> <br>
<<<<<<< HEAD
        <p>Este es el útlimo video, aquí encontrarás ejercicios sobre derivadas resueltos paso a paso con lujo de detalle para que quede más claro que el agua, este tema es por el que seguramente haz tomado el curso así que presta mucha atención!</p> <br>
=======
        <p>Este es el útlimo video, aquí encontrarás ejercicios sobre derivadas resueltos paso a paso con lujo de detalle para que quede más claro que el agua, este tema es por el que segúramente haz tomado el curso así que presta mucha atención!</p> <br>
>>>>>>> 87abe65ea9fc49ad48de4a558df46dc8f529b8bd
        <p>Autor: Alan Vitela Sanchez</p>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='4-video.html'"></input> `;

    var contenedor = document.getElementById("nivel13");
    radioSelec(contenedor);

    elementoFocus = 13;
};

function radio14focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>4.2 Documento de conceptos</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>INFORMACIÓN</h1> <br>
        <p>¿De qué me sirve derivar? ¿Cuáles son las reglas de derivación? Regla de la cadena ¿Qué es eso? , resuelve estas y otras dudas con este documento, te será de mucha utilidad.</p> <br>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='4-informacion.html'"></input> `;

    var contenedor = document.getElementById("nivel14");
    radioSelec(contenedor);

    elementoFocus = 14;
};

function radio15focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>4.3 Ejercicios de práctica</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>EJERCICIOS</h1> <br>
        <p>Ánimo, ya es el últmo tema, trae de vuelta ese lapiz y esa hoja y comienza a derivar, recuerda que de momento te proporcionamos la respuesta y el procedimiento, pero en el examen no, así que procura entender el tema antes de pasar al test.</p> <br>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='4-ejercicios.html'"></input> `;

    var contenedor = document.getElementById("nivel15");
    radioSelec(contenedor);

    elementoFocus = 15;
};

function radio16focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>4.4 Test evaluativo</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>TEST</h1> <br>
<<<<<<< HEAD
        <p>Esta es la última actividad del curso, y por eso hemos dejado lo más dificil hasta el final, mucha suerte derivando y con este test final.</p> <br>
=======
        <p>Esta es la ultima actividad del curso, y por eso hemos dejado lo más dificil hasta el final, mucha suerte derivando y con este test final.</p> <br>
>>>>>>> 87abe65ea9fc49ad48de4a558df46dc8f529b8bd
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='4-test.html'"></input> `;

    var contenedor = document.getElementById("nivel16");
    radioSelec(contenedor);

    elementoFocus = 16;
};

var elementoFocus;

function avanzar(){


    if(n_panel<3){
        n_panel++;

        efectoDesaparecer();

        setTimeout(function(){
            panelActual(); 
            verifiProgreso();
            if(document.getElementById("radio" + elementoFocus)){ document.getElementById("radio" + elementoFocus).focus() }
        },600);

        if(n_panel == 1){ habilitarBoton(1); }
    }

};
  
  function regresar(){

    if(n_panel>0){
        n_panel--; 

        efectoDesaparecer();

        setTimeout(function(){
            panelActual(); 
            verifiProgreso();
            if(document.getElementById("radio" + elementoFocus)){ document.getElementById("radio" + elementoFocus).focus() }
        },600);

        if(n_panel == 2){ habilitarBoton(2); }
    }

}; 

function radioSelec(contenedor){

    var contenedores = document.getElementsByClassName("nivel-contenedor");

    for(var i=0; i < contenedores.length; i++){
        if(contenedores[i].classList.contains("nivel-seleccionado")){
            contenedores[i].classList.remove("nivel-seleccionado");
        }
    }

    contenedor.classList.add("nivel-seleccionado");
}

function efectoDesaparecer(){

    let boton1 = document.getElementsByClassName("niveles-boton-iz")[0];
    let boton2 = document.getElementsByClassName("niveles-boton-de")[0];
    let nombre;
    let numero;
    let panelTitulo = document.getElementById("titulo");
    let panelNiveles = document.getElementById("niveles");

    boton1.disabled = true;
    boton2.disabled = true; 

    panelTitulo.classList.add("panel-objetos-desaparecidos");
    panelNiveles.classList.add("objeto-desaparecido");

    setTimeout(function (){

        nombre = document.getElementsByClassName("titulo-nombre")[0];
        numero = document.getElementsByClassName("titulo-numero")[0];
        nombre.classList.add("objeto-desaparecido");
        nombre.classList.add("objeto-pequeño");
        numero.classList.add("objeto-desaparecido");

        panelTitulo.classList.remove("panel-objetos-desaparecidos");
        
    },650);

    setTimeout(function(){
        nombre.classList.remove("objeto-pequeño");   
    },651);

    setTimeout(function(){
        panelNiveles.classList.remove("objeto-desaparecido");     
    },1100);

    setTimeout(function(){    
        nombre.classList.remove("objeto-desaparecido");
        numero.classList.remove("objeto-desaparecido");
        boton1.disabled = false;
        boton2.disabled = false;
    },1200);

}




function inhabilitarBoton(numBoton){
    
    let boton1 = document.getElementsByClassName("niveles-boton-iz")[0];
    let boton2 = document.getElementsByClassName("niveles-boton-de")[0];

    if(numBoton == 1){
        boton1.disabled = true;
        boton1.classList.add("boton-deshabilitado");
    }

    if(numBoton == 2){
        boton2.disabled = true;
        boton2.classList.add("boton-deshabilitado");
    }
}

function habilitarBoton(numBoton){
    
    let boton1 = document.getElementsByClassName("niveles-boton-iz")[0];
    let boton2 = document.getElementsByClassName("niveles-boton-de")[0];

    if(numBoton == 1){
        boton1.disabled = false;
        boton1.classList.remove("boton-deshabilitado");
    }

    if(numBoton == 2){
        boton2.disabled = false;
        boton2.classList.remove("boton-deshabilitado");
    }
}