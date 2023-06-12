var userNivel = pasarNivel();
var calificiones = [pasarTest1(),pasarTest2(),pasarTest3(),pasarTest4()];
var n_panel = Math.floor((userNivel - 1 ) / 4);

window.onload = function() { 
  panelActual();
  verifiProgreso(); 

  document.getElementsByClassName('nivel-actual')[0].lastElementChild.firstElementChild.focus();
};
  
function verifiProgreso() {

  var radios = document.getElementsByTagName('input');
  var radiosArray = [];

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio') { 
      radios[i].disabled = true;
      radiosArray.push(radios[i]);
    } 
  }

  var barrasNiveles = document.getElementsByClassName("nivel-barra");
  var divNiveles = document.getElementsByClassName("nivel-contenedor");
  var radiosTrue = userNivel - (n_panel)*4;

  for (var i = 0; i < radiosTrue; i++) {

    if(i==4){break}

    if(userNivel == 17){
      radiosTrue++;
      divNiveles[i].classList.add("nivel-completado");
      barrasNiveles[i].classList.add("barra-completado");
      radiosArray[i].disabled = false;
    }

    else if(i < radiosTrue-1){
      divNiveles[i].classList.add("nivel-completado");
      barrasNiveles[i].classList.add("barra-completado");
      radiosArray[i].disabled = false;
    }

    else{
      divNiveles[i].classList.add("nivel-actual");
      barrasNiveles[i].classList.add("barra-actual");
      radiosArray[i].disabled = false;
      //radiosArray[i].focus();
    }
      
  }

  if(divNiveles[3].classList.contains("nivel-completado")){
    if(calificiones[n_panel] < 10){ divNiveles[3].classList.add("nivel-abrobado");}
  }

  if(userNivel == 5 && n_panel == 0){ document.getElementById("barra5").classList.add("barra-actual") }
  else if(userNivel > 5 && n_panel == 0){ document.getElementById("barra5").classList.add("barra-completado") }

  if(userNivel == 9 && n_panel == 1){ document.getElementById("barra10").classList.add("barra-actual") }
  else if(userNivel > 9 && n_panel == 1){ document.getElementById("barra10").classList.add("barra-completado") }

  if(userNivel == 13 && n_panel == 2){ document.getElementById("barra15").classList.add("barra-actual") }
  else if(userNivel > 13 && n_panel == 2){ document.getElementById("barra15").classList.add("barra-completado") }

  if(userNivel == 17 && n_panel == 3){
    if(promedio() == 10 ){
      document.getElementById("corona").classList.add("nivel-completado");
      console.log("entro")
      console.log(promedio())
    }
    else{
      document.getElementById("corona").classList.add("nivel-actual");
      console.log(n_panel)
      console.log(promedio())
    }
  }

}

function promedio(){

  var suma = 0;
  
  for(var i = 0; i < calificiones.length; i++){
    suma = suma + calificiones[i];
  }
  prom = suma / calificiones.length;

  return prom;

}
