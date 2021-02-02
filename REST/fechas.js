'use strict'

var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();

var textoHora = `
    El año es: ${year}
    El mes es: ${mes+1}
    El día es: ${dia}
    Son las: ${hora}
`;

console.log(textoHora);