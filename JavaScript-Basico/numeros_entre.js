'use strict'

/*
Hacer un programa que muestre todos los numeros
entre los dos números que introduce el usuarios
*/

var numero1 = parseInt(prompt("Introduce el primer número.", 0));
var numero2 = parseInt(prompt("Introduce el segundo número.", 0));

while(isNaN(numero1) || isNaN(numero2)){
    var numero1 = parseInt(prompt("Introduce el primer número.", 0));
    var numero2 = parseInt(prompt("Introduce el segundo número.", 0));
}

document.write("<h1> De "+numero1+" a "+numero2+" están estos números:</h1>");

for(var i = numero1; i <= numero2; i++){
    document.write(i+"<br/>");
}
for(var i = numero1; i >= numero2; i--){
    document.write(i+"<br/>");
}

