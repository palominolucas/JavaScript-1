'use strict'

/*
Tabla de multiplicar de un numero introducido en pantalla.
*/

var numero = parseInt(prompt("Introduce un numero del 1 al 10", 1));

while(numero > 10 || numero < 1 || isNaN(numero)){
    var numero = parseInt(prompt("Introduce un numero del 1 al 10", 1));
}

document.write("<h1>Tabla del: "+numero+"</h1><br>")
for(var i = 1; i <=10; i++){
    document.write(numero+"x"+i+"="+(i*numero)+" <br/>");
}


//Todas las tablas de multiplicar.
for(var c = 1; c<=10; c++){
    document.write("<h1>Tabla del: "+c+"</h1><br>")
    for(var i = 1; i <=10; i++){
    document.write(numero+"x"+c+"="+(i*c)+" <br/>");
    }
}