'use strict'

window.addEventListener("load", () =>{
// BOM - Browser Object Model
function getBom(){
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(screen.height);
console.log(screen.width);
console.log(window.location);
}

//Redirije a una URL que le pases.
function redirect(url){
    window.location.href = url;
}

//Abre una pestaña con la URL que le pases.
function abrirVentana(url){
    window.open(url,"","width=400, height=400");
}
/*
Todo lo que puede hacer un navegador,
lo podemos hacer desde JavaScript!
*/
getBom();
})