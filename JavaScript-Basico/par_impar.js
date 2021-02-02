'use strict'


/* 
Programa que muestre si un numero
es par o impar.
1.Ventana prompt
2.Si no es valido, que pida denuevo el numero.
*/

var numero1 = parseInt(prompt("Selecciona un numero:", 0));
var numero2 = parseInt(prompt("Selecciona otro numero:", 0));
var numero3 = parseInt(prompt("Selecciona OTRO numero:", 0));

while(isNaN(numero1) || isNaN(numero2) || isNaN(numero3)){
    var numero1 = parseInt(prompt("Selecciona un numero:", 0));
    var numero2 = parseInt(prompt("Selecciona otro numero:", 0));
    var numero3 = parseInt(prompt("Selecciona OTRO numero:", 0));
}

if(numero1 % 2 == 0){
    console.log("El numero "+numero1+" es par.");
    document.write("El numero "+numero1+" es par.<br>");
    alert("El numero "+numero1+" es par.");
}else{
    console.log("El numero "+numero1+" es impar.");
    document.write("El numero "+numero1+" es impar.<br>");
    alert("El numero "+numero1+" es impar.");
}

if(numero2 % 2 == 0){
    console.log("El numero "+numero2+" es par.");
    document.write("El numero "+numero2+" es par.<br>");
    alert("El numero "+numero2+" es par.");
}else{
    console.log("El numero "+numero2+" es impar.");
    document.write("El numero "+numero2+" es impar.<br>");
    alert("El numero "+numero2+" es impar.");
}
if(numero3 % 2 == 0){
    console.log("El numero "+numero3+" es par.");
    document.write("El numero "+numero3+" es par.<br>");
    alert("El numero "+numero3+" es par.");
}else{
    console.log("El numero "+numero3+" es impar.");
    document.write("El numero "+numero3+" es impar.<br>");
    alert("El numero "+numero3+" es impar.");
}

