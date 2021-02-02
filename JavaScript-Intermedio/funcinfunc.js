'use strict'

function porConsola(numero1, numero2){
    console.log("Suma: "+(numero1+numero2));
        console.log("Resta: "+(numero1-numero2));
        console.log("Multiplicacion: "+(numero1*numero2));
        console.log("Division: "+(numero1/numero2));
        console.log("------------------------");
}

function porPantalla(numero1, numero2){
    document.write("Suma: "+(numero1+numero2)+" <br>");
        document.write("Resta: "+(numero1-numero2)+" <br>");
        document.write("Multiplicacion: "+(numero1*numero2)+" <br>");
        document.write("Division: "+(numero1/numero2)+" <br>");
        document.write("------------------------ <br>");
}


function calculadora(numero1, numero2, mostrar = false){
    if(mostrar == false){
        porConsola(numero1,numero2);
    }else{
        porPantalla(numero1,numero2);
    }
    return true;
}

calculadora(2,3);
calculadora(2,4,true);
calculadora(5,10);
