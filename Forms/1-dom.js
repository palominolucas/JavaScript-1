'use strict'

//DOM - Document Object Model


//conseguir elemento por ID
function cambiaColor(color){
    caja.style.background = color;
}




//var caja = document.getElementById("micaja");//al agregar el .innerHTML, capturo el texto dentro del div. 
var caja = document.querySelector("#micaja");// usamos sin nada para una etiqueta, # para un elementoID; . para una clase.

console.log(caja);

//Puedo modificar su contenido.
caja.innerHTML = "Cambiando el texto desde JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "Hola";

console.log(caja);


//Conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName("div");



var valor;
for(valor in todosLosDivs){
    console.log(valor)
    if(typeof todosLosDivs[valor].textContent == "string"){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector("#miseccion").prepend(parrafo); //append añade luego y prepend añade antes.
}
}





var contenidoTextos = todosLosDivs[2];
contenidoTextos.innerHTML = "Cambiando el texto del div con JS";



console.log(contenidoTextos);




//Conseguir elementos por su clase
window.addEventListener("load", () =>{
var divsRojos = document.getElementsByClassName("rojo");
var divsAmarillos = document.getElementsByClassName("amarillo");
divsAmarillos[0].style.background = "yellow";


for(var div in divsRojos){
    if(divsRojos[div].className == "rojo"){
    divsRojos[div].style.background= "red";
}
}
console.log(divsRojos);


//Query selector sirve para seleccionar un elemento.
var id = document.querySelector("#encabezado")
console.log(id);

})
