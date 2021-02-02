'use strict'


//Parametros REST y SPREAD


function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ",fruta2);
    console.log(resto_de_frutas);//se guardan los parametros en un array.
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Melon");
//Tambien puedo usar un SPREAD, para obtener el mismo resultado.
var frutas = ["Naranja", "Manzana"]
listadoFrutas(...frutas, "Sandia", "Melon");


