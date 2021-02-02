'use strict'

//JSON - JavaScript Object Notation

window.addEventListener("load", function(){
   
   
    var libro = {
        titulo: "El nombre del Viento",
        autor: "Patric Rothfuss",
        year: 2007,
    };


    var libros = [
        {titulo: "Las tablillas esmeralda", year: "Unknown", autor: "Unknown"},
        libro
    ]




    var caja_libros = document.querySelector("#libros");
    var index;
    for(index in libros){
        var p = document.createElement("p");
        p.append(libros[index].titulo + " - " + libros[index].year);
        caja_libros.append(p)
    }








});