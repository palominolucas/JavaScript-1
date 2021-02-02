'use strict'


//Transformacion de strings

var numero = 12;
var texto1 = "Bienvenido al ejercicio";
var texto2 = "Este curso es muy buen curso";


var dato = numero.toString(); // y la convertimos en string
//texto de minuscula a mayuscula
var dato2 = texto1.toUpperCase();
var dato3 = texto1.toLowerCase();


console.log(dato, typeof dato+'\n', dato2, typeof dato2+'\n', dato3, typeof dato3+'\n');


//Calcular longitud

var nombre = "Hola";
var nombre2 = ["hola", "chau", "Buenos dias"];

console.log(nombre, nombre.length,"letras.\n", nombre2, nombre2.length,"componentes.");

//Concatenar - Unir textos

//var textoTotal = texto1+" "+texto2;
//o bien puedo hacerlo asi.
var textoTotal = texto1.concat(" ",texto2);
console.log(textoTotal);


var busqueda = texto2.indexOf("curso");//tambien puedo usar texto2.lastIndexOf
console.log(busqueda);

//puedo hacer lo mismo con .search o .match para que busque de manera global

var busqueda = texto2.match(/curso/g);//tambien puedo usar texto2.lastIndexOf
console.log(busqueda);

// substraccion de caracteres.
var busqueda = texto2.substr(5,6);//tambien puedo usar texto2.lastIndexOf
console.log(busqueda);

var busqueda = texto2.includes("curso");
console.log(busqueda);