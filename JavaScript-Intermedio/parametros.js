'use strict'



/*
function calculadora(numero1, numero2){
    console.log("Suma: "+(numero1+numero2));
    console.log("Resta: "+(numero1-numero2));
    console.log("Multiplicacion: "+(numero1*numero2));
    console.log("Division: "+(numero1/numero2));
    console.log("------------------------");
    //return "Hola soy la calculadora!!";
}


calculadora(1,2);
calculadora(2,1);


for(var i = 1; i <= 10; i++){
    console.log(i);
    calculadora(i,8);
}
*/




function calculadora(numero1, numero2, mostrar = false){

    if(mostrar == false){
        console.log("Suma: "+(numero1+numero2));
        console.log("Resta: "+(numero1-numero2));
        console.log("Multiplicacion: "+(numero1*numero2));
        console.log("Division: "+(numero1/numero2));
        console.log(mostrar);
        console.log("------------------------");
    }else{
        document.write("Suma: "+(numero1+numero2)+" <br>");
        document.write("Resta: "+(numero1-numero2)+" <br>");
        document.write("Multiplicacion: "+(numero1*numero2)+" <br>");
        document.write("Division: "+(numero1/numero2)+" <br>");
        document.write(mostrar+" <br>");
        document.write("------------------------ <br>");
    }


    
}


calculadora(1,4);
calculadora(3,4,true)
calculadora(5,5,true)