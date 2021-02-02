'use strict'






function holaMundo(texto){
    var hola_mundo = "Texto dentro de funcion.";
    console.log(texto);
    console.log(numero, typeof numero);
    console.log(numero.toString(), typeof numero.toString())
    console.log(hola_mundo);
}


var texto = "Hola, soy una variable global";
var numero = 12;

holaMundo(texto);


/*console.log(hola_mundo); esta variable esta definida
solo dentro de una funcion.
Por lo que no puedo invocarla.
*/



