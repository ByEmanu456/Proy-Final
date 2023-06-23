/*
    !Proyecto final del semestre Programación SubI y SubIII
    JavaScript code for validation by: Esteban Flores Martínez
    ?Version: Server for Fonseca
*/

//!Función que envía los datos mediante una solicitud AJAX:
function enviar(name, lastName, birthDate, color, gender, semester, speciality, passWord){
    if(name != "" && lastName != "" && birthDate != "" && gender != "" && semester != "" && speciality != "" && passWord != ""){
        const params = "nombre=" + encodeURIComponent(name)
                       + "&apellidos=" + encodeURIComponent(lastName)
                       + "&fecha_nacimiento=" + encodeURIComponent(birthDate)
                       + "&color=" + encodeURIComponent(color)
                       + "&genero=" + encodeURIComponent(gender)
                       + "&semestre=" + encodeURIComponent(semester)
                       + "&especialidad=" + encodeURIComponent(speciality)
                       + "&contrasena=" + encodeURIComponent(passWord)
                       + "&enviar=Enviar";

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "../php/manejo_de_datos.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onload = function(){
            if(xhr.status === 200){
                console.log(xhr.responseText);
            }
        };
        xhr.send(params);
    }
}

//!Función para validar los datos del formulario:
function validar(event){
    event.preventDefault(); //? Evitar el reinicio de la página

    let _nombre = document.getElementById("nombre").value;
    let _apellidos = document.getElementById("apellidos").value;
    let _fecha_nacimiento = document.getElementById("fecha").value;
    let _color = document.getElementById("color").value;
    const regExColor = /^#[0-9A-Fa-f]{6}$/i;
    let _genero = "";
    let _generoRadios = document.getElementsByName("genero");
    for(let i = 0; i < _generoRadios.length; i++){
        if(_generoRadios[i].checked){
            _genero = _generoRadios[i].value;
            break;
        }
    }
    let _semestre = document.getElementById("semestre").value;
    let _especialidad = document.getElementById("especialidad").value;
    let _contrasena = document.getElementById("contrasena").value;
    let _confirmacion = document.getElementById("confirmar").value;
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()\-=_+{}<>?\[\]|]+$/;

    if(_nombre.trim() == ""){
        alert("El nombre es obligatorio.");
        console.log("Name error!");
    }else if(_apellidos.trim() == ""){
        alert("Los apellidos son obligatorios.");
        console.log("Last name error!");
    }else if(_fecha_nacimiento.trim() == ""){
        alert("La fecha de nacimiento es obligatoria.");
        console.log("Birth date error!");
    }else if(_color.trim() == ""){
        alert("El color es obligatorio.");
        console.log("Color error!");
    }else if(!regExColor.test(_color)){
        alert("El color debe tener un formato válido (por ejemplo, #FF0000).");
        console.log("Color error!");
    }else if(_genero != "Hombre" && _genero != "Mujer" && _genero != "Otro"){
        alert("El genero es obligatorio.");
        console.log("Gender error!");
    }else if(_semestre.trim() == ""){
        if(_semestre < 1 || _semestre > 6){
            alert("El semestre es obligatorio.");
            console.log("Semester error!");
        }
    }else if(_especialidad.trim() == ""){
        alert("La especialidad es obligatoria.");
        console.log("Speciality error!");
    }else if(_contrasena.length < 8 || _contrasena.length > 20){
        alert("La contraseña debe tener entre 8 y 20 caracteres.");
        console.log("Password error!");
    }else if(!regEx.test(_contrasena)){
        alert("La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y solo se aceptan los siguientes símbolos: !@#$%^&*()-=_+{}<>?[]|");
        console.log("Password error!");
    }else if(_contrasena != _confirmacion){
        alert("Las contraseñas no coinciden.");
        console.log("Confirmation error!");
    }else{
        enviar(_nombre, _apellidos, _fecha_nacimiento, _color, _genero, _semestre, _especialidad, _contrasena);
        console.log("Success!");
    }
}