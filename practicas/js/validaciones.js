var nombre = document.getElementById("name");
var clave = document.getElementById("password");
var correo = document.getElementById("email");

const form1 = document.getElementById("form");
var msjMostrar = document.getElementById("warnings");

form1.addEventListener('submit', e =>{
    e.preventDefault();
    let msj = "";
    var enviar = false;

    if(nombre.value.length < 4 || nombre.value.length > 10 ){
        msj = msj + 'El nombre debe estar entre 4 y 10 caracteres';
        enviar = true;
    }

    var letra = nombre.value.charAt(0);
    console.log(letra);
    if(!esMayuscula(letra)){
        
        msj += '<br>La primera letra debe ser mayúscula';
        enviar = true;
    }

    if(nombre.value == 'Victor'){
        msj += 'El nombre no debe ser Victor';
        enviar = true;
    }

    if(enviar){
        msjMostrar.innerHTML = msj;
    }
    else{
        msjMostrar.innerHTML = "Enviado";
    }



});

function esMayuscula(letra){
    console.log(letra);
    console.log(letra.toUpperCase());
    if(letra == letra.toUpperCase()){
        return true;
    }
    else{
        return false;
    }
     
}