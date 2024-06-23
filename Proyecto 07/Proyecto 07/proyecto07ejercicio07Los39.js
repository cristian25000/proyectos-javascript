/* -Fecha de publicación: Junio 18
- Hora: 12:00 M
- Versión de su código: 1
- Autor: Los 39 ingenieros del BootCamp
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: ECMAScript 6
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripcion: Concatena nombre, apellido y año */

const prompt = require('prompt-sync')(); // Importar la libreria prompt-sync

let nombre = prompt("Ingrese el nombre: ");
let apellido = prompt("Ingrese el apelldio: ");
let anio = prompt("Ingrese el año de nacimiento: ");

console.log(nombre + " " + apellido + " " + anio);
