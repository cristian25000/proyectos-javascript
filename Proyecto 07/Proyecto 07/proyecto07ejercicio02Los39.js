/* -Fecha de publicación: Junio 18
- Hora: 11:10 PM
- Versión de su código: 1
- Autor: Los 39 ingenieros del BootCamp
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: ECMAScript 6
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripcion: Este programa calcula el volumen de una esfera. */

const prompt = require('prompt-sync')(); //Se importa la librería prompt-sync

let radio = parseFloat(prompt("Ingrese el radio de la esfera: ")); // Se solicita al usuario ingresar el radio de la esfera

let volumen = (4/3) * Math.PI * Math.pow(radio, 3); // Se realiza el cálculo del volumen de la esfera

console.log(`El volumen de la esfera de radio ${radio} es ${volumen}`) // Se imprime por consola el volumen de la esfera
