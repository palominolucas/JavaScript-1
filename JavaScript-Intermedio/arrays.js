'use strict'


/*
Arrays, arreglos o matrices:
coleccion de tipos de datos
que puede tener una variable
*/

var nombres = ["Lucas", "Micaela", "Arya", "Maia", 28, true];

var lenguajes = new Array("PHP", "JS", "Go", "Java", "Pascal", "C++");
//Los indices empiezan en 0, asi que PHP es el 0 y JS el 1.


console.log(nombres);
console.log(lenguajes);

//Para sacar datos puntuales de un array, lo especifico.

console.log(nombres[2]);
console.log(lenguajes[2]);

//Con length, puedo ver que cantidad de elementos tengo en un array.
console.log(nombres.length);
console.log(lenguajes.length);

/*
var elemento = parseInt(prompt("Que elemento del array quieres?",0));
while(elemento >= nombres.length || isNaN(elemento) || elemento < 0){
    alert("Introduce un numero menor que "+ nombres.length);
    elemento = parseInt(prompt("Que elemento del array quieres?",0));
}
    alert("El nombre del usuario es: "+ nombres[elemento]);
*/

//Como mostrar todos los elementos del array?

document.write("<h2>Lenguaje de programacion del 2018</h2>");
document.write("<ul>");

/*
for(var i = 0; i <ul lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>")

}
*/

/*
//Recorre el array de forma mas limpia.
lenguajes.forEach((elemento, index, arr)=>{
    console.log(arr);
    document.write("<li>"+elemento+"</li>");
});

*/
for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");

}
document.write("</ul>");



//Como hacer una busqueda

var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP";
});
console.log(busqueda);
//O mas limpio

var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");
console.log(busqueda);

//find index.

var busqueda2 = lenguajes.findIndex(lenguaje => lenguaje == "JS");
console.log(busqueda2);



var precios = [10, 20, 50, 80, 12];
var busquedaprecios = precios.some(precio => precio >= 200);
console.log(busquedaprecios);
//Nos dara false, porque no hay ningun precio mayor o igual a 200.
