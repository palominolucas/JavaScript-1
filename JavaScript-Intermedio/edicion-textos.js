'use strict'

//Transformacion de textos.

var numero = 22;
var texto1 = "  Hola que tal?  ";
var texto2 = "Yo muy bien.";

var busqueda = texto1.slice(6);//corta ciertos caracteres puede ser desde 0 (6) o coordeanadas (6,8)
console.log(busqueda);



var busqueda2 = texto1.split(" ");
console.log(busqueda2);


var busqueda2 = texto1.trim();
console.log(busqueda2);

