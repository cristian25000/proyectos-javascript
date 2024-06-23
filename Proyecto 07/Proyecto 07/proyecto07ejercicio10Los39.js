/* -Fecha de publicación: Junio 18
- Hora: 12:30 AM
- Versión de su código: 1
- Autor: Los 39 ingenieros del BootCamp
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: ECMAScript 6
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripcion: Este programa convierte de mph a m/s*/

const prompt = require('prompt-sync')(); // Se importa la libreria prompt-sync

let millas = parseFloat(prompt("Ingrese la millas por hora: ")); // Se pide por consola las millas 

console.log(`${millas} em m/s es equivalente a ${millas * 1609.344 * 3600}`); // Se realiza e imprime la conversion de mph a m/s
