'use strict'

/*
Eventos, función que se ejectua cuando
sucede algo. El mouse hace click o 
pasa por encima de algo, etc.
*/

//Eventos del Ratón
window.addEventListener("load", () =>{
    var boton = document.querySelector("#boton");


    function cambiarColor(){
        console.log("Me diste click!")

        var bg = boton.style.background;
        if(bg == "green"){
        boton.style.background="red";
        }else{
            boton.style.background="green";
        }
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";

        return true;
    }


    /*
    ya tomado el boton, puedo puedo usar
    el addEventListener
    */ 

    boton.addEventListener("click", function(){
        cambiarColor();
    })



    //Mouse Over 

    boton.addEventListener("mouseover", function(){
        boton.style.background = "#ccc";
    })

    boton.addEventListener("mouseout", function(){
        boton.style.background = "yellow";
    })


    /*Focus: cuando entro al imput,
    hace lo que sea que le diga a la función.*/
    var imput = document.querySelector("#campo_nombre");
    imput.addEventListener("focus", function(){
        console.log("[Focus]Estas dentro del imput");
    });


    //Blur: Hace lo opuesto a Focus
    imput.addEventListener("blur", function(){
        console.log("[Blur]Estas fuera del imput");
    });


    //KeyDown: Interactua cuando mantienen una tecla.
    imput.addEventListener("keydown", function(){
        console.log("[KDown]Pulsando esta tecla ", String.fromCharCode(event.keyCode));
    })


    //KeyPress: Una vez pulsada la tecla.
    imput.addEventListener("keypress", function(){
        console.log("[KPress]Presionada la tecla ", String.fromCharCode(event.keyCode));
    })



    //KeyUp
    imput.addEventListener("keyup", function(){
        console.log("[KUp]Soltada la tecla ", String.fromCharCode(event.keyCode));
    })
})