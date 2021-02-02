'use strict'

// Plantillas de texto

var nombre = prompt("Escribe tu nombre:")
var apellidos = prompt("Escribe tus apellidos.")


var texto =`
    <h2> Hola que tal<h2>
   <h3> Mi nombre es: ${nombre} </h3>
   <h3> Mi/s apellido/s es/son: ${apellidos} </h3>
`;

document.write(texto);



