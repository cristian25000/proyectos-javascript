/* -Fecha de publicación: Junio 18
- Hora: 11:30PM
- Versión de su código: 1
- Autor: Los 39 ingenieros del BootCamp
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: ECMAScript 6
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripcion: Este programa convierte km/h a mph */

const prompt = require('prompt-sync')(); //Se importa la librería prompt-sync

let kilometros = parseInt(prompt("Ingrese la velocidad en km/h: ")); // Se solicita al usuario ingresar la velocidad en km/h

let millasPorHora = kilometros * 0.621371; // Se realiza la conversión de km/h a mph

console.log(`${kilometros}mk/h equivale a ${millasPorHora} mph`) // Se imprime por consola la velocidad solicitada en millas por hora
