'use strict'

window.addEventListener("load", function(){
    
    //Timers
    function intervalo(){
        var tiempo = setInterval(function(){
        //Con setTimeout, se ejecuta una sola vez.
        console.log("Set interval ejecutado"); 

        var encabezado = document.querySelector("h1");
        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize = "30px";
        }else{
            encabezado.style.fontSize = "50px";
        }




        
        
        }, 1000);
        return tiempo;
    }

    var tiempo = intervalo();
    var stop = document.querySelector("#stop");
    var start = document.querySelector("#start");

    
    stop.addEventListener("click", function(){
        clearInterval(tiempo);
        alert("Paraste el bucle!!")
    })
    
    start.addEventListener("click", function(){
        alert("Iniciaste el bucle!!");
        intervalo();
    })
});