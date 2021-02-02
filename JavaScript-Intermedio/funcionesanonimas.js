'use strict'

/*
Funciones Anonimas
Estas funciones no tienen un nombre
y, esto, nos permite guardarla dentro de una variable.
Nos permite, por ejemplo, ejecutar una funcion dentro de otra.


var pelicula = function(nombre){
    return "La pelicula es: "+nombre;
}

console.log(pelicula("Go for IT"));
*/


function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;
    
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    
    return sumar;
}

//En lugar de sumame(5,7,function(dato){  puedo escribir una funcion de flecha
sumame(5,7, dato =>{
    console.log("La suma es: ",dato);

},
//function(dato){ aca tambien, sustituimos function por funcion de flecha.
    dato =>{
    console.log("La suma por dos es: ", (dato*2))
}
)

