'use strict'


/*Funciones:
Agrupacion reutilizable de un conjunto de instrucciones.
Involucra varias intrucciones 
dentro del programa para que suceda algo.
*/


//Defino a la funcion
function calculadora(){
    console.log("Hola, soy la Calculadora");
    console.log("Si, soy yo.")
    return "Hola soy la calculadora!!";
}

//Al invocarla, se ejecuta el grupo de instrucciones.
calculadora();


var resultado = calculadora();

console.log(resultado);