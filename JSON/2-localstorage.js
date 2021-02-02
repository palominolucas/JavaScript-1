'use strict'

window.addEventListener("load", function(){

    //Localstorage.


    //Comprobar disponibilidad de localstorage
    if(typeof(Storage) != "undefined"){
        console.log("localstorage disponible");
    }else{
        console.log("Incompatible con localstorage");
    }



    //Cómo guardar datos:

    localStorage.setItem("titulo", "El nombre del viento")


    //Recuperar elemento
    document.querySelector("#libros").innerHTML = localStorage.getItem("titulo");


    //Guardar objetos
    var usuario = {
        nombre: "Lucas Palomino",
        emali: "palomino.lucas@gmail.com",
        web: "https://www.linkedin.com/in/lucas-palomino-47217957/",
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));


    //Recuperar Objeto
    console.log(localStorage.getItem("usuario"));

});