'use strict'

/*
Mostrar todos los numeros
impares que hay entre 2 numeros 
introducidos por el usuario
*/

var numero1 = parseInt(prompt("Introduce el primer número.", 0));
var numero2 = parseInt(prompt("Introduce el segundo número.", 0));

while(numero1 < numero2){
    numero1++;
    
    if(numero1%2 !=0){
        document.write("El "+numero1+" es impar.<br>");
        console.log("El "+numero1+" es impar.<br>");
    }
}
while(numero1 > numero2){
    numero1--;
    
    if(numero1%2 !=0){
        document.write("El "+numero1+" es impar.<br>");
        console.log("El "+numero1+" es impar.<br>");
    }
}