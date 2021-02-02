'use strict'


var categorias = ["Acción", "Terror", "Comedia"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran Torino"];

var cine = [categorias, peliculas];

console.log(cine[0][1]);//acceder a un array dentro de un array.

console.log(cine[1][2])

/*
//Operaciones con array.
var elemento = "";
do{
    elemento = prompt("Introduce tu pelicula");
    peliculas.push(elemento);

}while(elemento != "ACABAR");

peliculas.pop();//elimina ultimo elemento de un array.


//peliculas.push("Batman");
console.log(peliculas);
*/

var indice= peliculas.indexOf("Gran Torino");
if(indice > -1){
    peliculas.splice(indice,1);
}

console.log(peliculas);

//pasar a string
var peliculas_string = peliculas.join();

console.log(peliculas_string);

//String a array.
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log(cadena_array);


//Como ordenar un array.
peliculas.reverse();//.sort para ordenar alfanumericamente.
console.log(peliculas);

