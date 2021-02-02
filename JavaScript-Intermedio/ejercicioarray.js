'use strict'

/*
Programa que:
-Pida 6 numeros por pantalla
y los ubique en un array. 
-Muestre el array entero (todos sus elementos) 
en el cuerpo de la pagina.
-Ordenarlo y mosrarlo.
-Invertir su orden y mostrarlo.
-Mostrar cantidad de elementos.
-Busqueda de un valor introducido por el usuario
y que nos diga si encuentra el valor y su indice.
*/


/* Asi lo hice yo solo, antes de ver la clase.

var numeros = [];


for(var i = 0; i < 6; i++){
//numeros[i] = parseInt(prompt("Introduce un número", 0));
numeros.push(parseInt(prompt("Introduce un número:",0)));
}

//Mostrar en el cuerpo de la pagina
document.write("<h1>Numeros del array:</h1>")
document.write("<ul>")

//ordeno los numeros de menor a mayor
numeros.sort((a, b) => a - b );

for(let numero in numeros){
    document.write("<li>"+numeros[numero]+"</li>");

}
document.write("</ul>");


//numeros invertidos
numeros.reverse();
document.write("<h1>Numeros invertidos del array:</h1>")
document.write("<ul>")


for(let numero in numeros){
    document.write("<li>"+numeros[numero]+"</li>");

}
document.write("</ul>");

document.write("<h3>Cantidad de numeros en el Array:</h3>")
document.write(numeros.length);


console.log(numeros);
*/

function mostrarArray(elementos, textoCustom =""){
    document.write("<h1> Contenido del Array "+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>");
}


var numeros = [];

for(var i = 0; i < 6; i++){
    numeros.push(parseInt(prompt("Introduce un número:", 0)));
}


//Mostrar en el cuerpo de la pagina
mostrarArray(numeros);

//mostrar array ordenado.
numeros.sort((a, b) => a - b); //o numeros.sort(function(a, b){return a - b});
mostrarArray(numeros, "ordenados");

//mostrar array al reves.
numeros.reverse();
mostrarArray(numeros, "al revés");

document.write("<h3>Cantidad de numeros en el Array:"+numeros.length+"</h3>")


//Busqueda
numeros.sort((a, b) => a - b);
var busqueda = parseInt(prompt("Busca un número", 0));
var posicion = numeros.findIndex(numero => numero == busqueda);


if(posicion && posicion != -1){
document.write("<hr/><h1>Encontrado</h1>");
document.write("<h1>Se encuentra en la posición: "+posicion+"</h1><hr/>");
}else{
    document.write("<hr/>Número no encontrado.");
}