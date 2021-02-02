'use strict'

/*
Hacer un programa que nos diga cual es nº 
el mayor, el menor y si son iguales
*/


var numero1 = parseFloat(prompt("Introduce el primer numero",0));
var numero2 = parseFloat(prompt("Introduce el segundo número.",0));

console.log(numero1,numero2);
while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseFloat(prompt("Introduce el primer numero",0));
    numero2 = parseFloat(prompt("Introduce el segundo número.",0));

}

if(numero1 == numero2){
    alert("Los números son iguales.");
}else if(numero1 > numero2){
    alert("El número MAYOR es: " + numero1+" el Nº1");
    alert("El número MENOR es: " + numero2+" el Nº2");
}else if(numero2 > numero1){
    alert("El número MAYOR es: " + numero2+" el Nº2");
    alert("El número MENOR es: " + numero1+" el Nº1");
}else{
    alert("Introduce un número válido.")
}


/*
Plus: si los números no son un número,
o son menores o iguales a cero,
nos los vuelva a pedir.
*/