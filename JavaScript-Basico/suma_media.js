'use strict'

/*
Utilizando un bucle, mostrar la suma
 y la media de los numeros introducidos
 hasta introducir un número negativo 
 y, ahí, mostrar el resultado
*/

var suma = 0;
var contador = 0;

do{
    var numero = parseFloat(prompt("Introduce número hasta que metas uno negativo", 0));

    if(isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){
        suma = suma + numero;
        //o suma+= numero;
       
        contador++;
    }
    
    console.log(suma,parseFloat(contador)+ " interacción");
}while(numero >= 0)

alert("La suma de todos los numeros es: "+ suma);
alert("La media de todos los numeros es: "+ (suma/contador));

