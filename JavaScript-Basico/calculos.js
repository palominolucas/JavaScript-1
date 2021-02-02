'use strict'

/*
-Una calculadora que nos pida dos numeros por pantalla
-Si pedimos uno mal, que lo vuelva a pedir.
-En el cuerpo de la pagina, en una alerta y
por consola, muestre el resultado de sumar,
restar, multiplicar y dividir esas dos cifras.
*/


var numero1 = parseInt(prompt("Selecciona un numero:", 0));
var numero2 = parseInt(prompt("Selecciona otro numero:", 0));


while(isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Selecciona un numero:", 0));
    numero2 = parseInt(prompt("Selecciona otro numero:", 0));
    
}

var resultado = "La suma es: "+(numero1+numero2)+" <br/>"+
                 "La resta es: "+(numero1-numero2)+" <br/>"+
                 "La multiplicacion es: "+(numero1*numero2)+" <br/>"+
                 "La division es: "+(numero1%numero2)+" <br/>";


var resultadoCMD = "La suma es: "+(numero1+numero2)+" \n"+
                 "La resta es: "+(numero1-numero2)+" \n"+
                 "La multiplicacion es: "+(numero1*numero2)+" \n"+
                 "La division es: "+(numero1%numero2)+" \n";
                 
document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);
