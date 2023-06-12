
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

    <div class="nivel-contenedor" id="nivel2">
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
    }

    else if(n_panel == 1){
        document.getElementById("titulo").innerHTML = '<div class="titulo-nombre"><h1>Funciones matemáticas</h1></div><div class="titulo-numero"><h1>2</h1></div>'
        document.getElementById("niveles").innerHTML = radios_panel2;
    }

    else if(n_panel == 2){
        document.getElementById("titulo").innerHTML = '<div class="titulo-nombre"><h1>Limites</h1></div><div class="titulo-numero"><h1>3</h1></div>'
        document.getElementById("niveles").innerHTML = radios_panel3;
    }

    else if(n_panel == 3){
        document.getElementById("titulo").innerHTML = '<div class="titulo-nombre"><h1>Derivada de una función</h1></div><div class="titulo-numero"><h1>4</h1></div>'
        document.getElementById("niveles").innerHTML = radios_panel4;
    }
}

var elementoFocus;

function avanzar(){
    if(n_panel<3){
        n_panel++;
        panelActual();
        verifiProgreso();           
    }

    if(document.getElementById("radio" + elementoFocus)){ document.getElementById("radio" + elementoFocus).focus() }

  };
  
  function regresar(){
    if(n_panel>0){
        n_panel--;
        panelActual(); 
        verifiProgreso();
    }

    if(document.getElementById("radio" + elementoFocus)){ document.getElementById("radio" + elementoFocus).focus() }

  };  

//RADIOS DEL TEMA 1

function radio1focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>1. Video Explicativo</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>VIDEO 1</h1> <br>
        <p>Ve este video y aprende ¿Que son? ¿Como identificarlas? ¿Qué tipos hay?, entre otras cosas que van a serte de utilidad en proximas clases, pon atención porque despues tu harás los ejecicios.</p> <br>
        <p>Autor:</p>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='1-video.html'"></input> `;

    var contenedor = document.getElementById("nivel1");
    radioSelec(contenedor);

    elementoFocus = 1;
};

function radio2focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>2. Documento de conceptos</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>INFORMACIÓN 1</h1> <br>
        <p>En estos documentos podras leer mas infomracion</p> <br>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='1-informacion.html'"></input> `;

    var contenedor = document.getElementById("nivel2");
    radioSelec(contenedor);

    elementoFocus = 2;
};

function radio3focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>3. Ejercicios de practica</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>EJERCICIOS 1</h1> <br>
        <p>Toma lapiz y pluma para resolver los siguientes ejercicios, no te preocupes, tambien te proporcionaremos las respuestas pero preaparate ya que la siguiente actividad es un test y tienes que aprobar para avanzar! </p> <br>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='1-ejercicios.html'"></input> `;

    var contenedor = document.getElementById("nivel3");
    radioSelec(contenedor);

    elementoFocus = 3;
};

function radio4focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>4. Examen</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>TEST 1</h1> <br>
        <p>Resuelve el siguiente test para poder continuar, puedes tomarte el tiempo que necesites. Obten almenos un 6 de califiación para poder continuar!</p> <br>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='1-test.html'"></input> `;

    var contenedor = document.getElementById("nivel4");
    radioSelec(contenedor);

    elementoFocus = 4;
};

//RADIOS DEL TEMA 2

function radio5focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>Video Explicativo</h4>';
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>VIDEO 2</h1> <br>
        <p>Ve este video y aprende ¿Que son? ¿Como identificarlas? ¿Qué tipos hay?, entre otras cosas que van a serte de utilidad en proximas clases, pon atención porque despues tu harás los ejecicios.</p> <br>
        <p>Autor:</p>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='#'"></input> `;

    var contenedor = document.getElementById("nivel5");
    radioSelec(contenedor);

    elementoFocus = 5;
};

function radio6focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>DOCUMENTOS</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>INFORMACIÓN 2</h1> <br>
        <p>En estos documentos podras leer mas infomracion</p> <br>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='#'"></input> `;

    var contenedor = document.getElementById("nivel6");
    radioSelec(contenedor);

    elementoFocus = 6;
};

function radio7focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>EJERCICIOS</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>EJERCICIOS 2</h1> <br>
        <p>Toma lapiz y pluma para resolver los siguientes ejercicios, no te preocupes, tambien te proporcionaremos las respuestas pero preaparate ya que la siguiente actividad es un test y tienes que aprobar para avanzar! </p> <br>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='#'"></input> `;

    var contenedor = document.getElementById("nivel7");
    radioSelec(contenedor);

    elementoFocus = 7;
};

function radio8focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>EXAMEN</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>TEST 2</h1> <br>
        <p>Resuelve el siguiente test para poder continuar, puedes tomarte el tiempo que necesites. Obten almenos un 6 de califiación para poder continuar!</p> <br>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='#'"></input> `;

    var contenedor = document.getElementById("nivel8");
    radioSelec(contenedor);

    elementoFocus = 8;
};

//RADIOS DEL TEMA 3

function radio9focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>VIDEO.MP4</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>VIDEO 3</h1> <br>
        <p>Ve este video y aprende ¿Que son? ¿Como identificarlas? ¿Qué tipos hay?, entre otras cosas que van a serte de utilidad en proximas clases, pon atención porque despues tu harás los ejecicios.</p> <br>
        <p>Autor:</p>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='#'"></input> `;

    var contenedor = document.getElementById("nivel9");
    radioSelec(contenedor);

    elementoFocus = 9;
};

function radio10focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>DOCUMENTOS</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>INFORMACIÓN 3</h1> <br>
        <p>En estos documentos podras leer mas infomracion</p> <br>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='#'"></input> `;

    var contenedor = document.getElementById("nivel10");
    radioSelec(contenedor);

    elementoFocus = 10;
};

function radio11focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>EJERCICIOS</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>EJERCICIOS 3</h1> <br>
        <p>Toma lapiz y pluma para resolver los siguientes ejercicios, no te preocupes, tambien te proporcionaremos las respuestas pero preaparate ya que la siguiente actividad es un test y tienes que aprobar para avanzar! </p> <br>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='#'"></input> `;

    var contenedor = document.getElementById("nivel11");
    radioSelec(contenedor);

    elementoFocus = 11;
};

function radio12focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>EXAMEN</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>TEST 3</h1> <br>
        <p>Resuelve el siguiente test para poder continuar, puedes tomarte el tiempo que necesites. Obten almenos un 6 de califiación para poder continuar!</p> <br>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='#'"></input> `;

    var contenedor = document.getElementById("nivel12");
    radioSelec(contenedor);

    elementoFocus = 12;
};

//RADIOS DEL TEMA 4

function radio13focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>VIDEO.MP4</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>VIDEO 4</h1> <br>
        <p>Ve este video y aprende ¿Que son? ¿Como identificarlas? ¿Qué tipos hay?, entre otras cosas que van a serte de utilidad en proximas clases, pon atención porque despues tu harás los ejecicios.</p> <br>
        <p>Autor:</p>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='#'"></input> `;

    var contenedor = document.getElementById("nivel13");
    radioSelec(contenedor);

    elementoFocus = 13;
};

function radio14focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>DOCUMENTOS</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>INFORMACIÓN 4</h1> <br>
        <p>En estos documentos podras leer mas infomracion</p> <br>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='#'"></input> `;

    var contenedor = document.getElementById("nivel14");
    radioSelec(contenedor);

    elementoFocus = 14;
};

function radio15focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>EJERCICIOS</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>EJERCICIOS 4</h1> <br>
        <p>Toma lapiz y pluma para resolver los siguientes ejercicios, no te preocupes, tambien te proporcionaremos las respuestas pero preaparate ya que la siguiente actividad es un test y tienes que aprobar para avanzar! </p> <br>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='#'"></input> `;

    var contenedor = document.getElementById("nivel15");
    radioSelec(contenedor);

    elementoFocus = 15;
};

function radio16focus(){
    document.getElementById("info_titulo").innerHTML = '<h4>EXAMEN</h4>'
    document.getElementById("info").innerHTML = `
    
    <div>
        <h1>TEST 4</h1> <br>
        <p>Resuelve el siguiente test para poder continuar, puedes tomarte el tiempo que necesites. Obten almenos un 6 de califiación para poder continuar!</p> <br>
    </div>`;

    document.getElementById("boton").innerHTML = ` <input type="button" class="informacion-boton" value="Comenzar!" onclick="location.href='#'"></input> `;

    var contenedor = document.getElementById("nivel16");
    radioSelec(contenedor);

    elementoFocus = 16;
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


