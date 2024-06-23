/* -Fecha de publicación: Junio 18
- Hora: 11:20 PM
- Versión de su código: 1
- Autor: Los 39 ingenieros del BootCamp
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: ECMAScript 6
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripcion: Este programa imprime el perimetro de un rectangulo  */

const prompt = require('prompt-sync')(); //Se importa la librería prompt-sync

let largo = parseFloat(prompt("Ingrese el largo del rectangulo: ")); // Se solicita al usuario ingresar el lado 1 del rectangulo
let ancho = parseFloat(prompt("Ingrese el ancho del rectangulo: ")); // Se solicita al usuario ingresar el lado 2 del rectangulo

let perimetro = (largo * 2) + (ancho * 2); // Se realiza el cálculo del perimetro del rectangulo

console.log(`El perimetro de un rectangulo de largo ${largo} y de ancho ${ancho} es de ${perimetro}`) // Se imprime por consola el perimetro del rectangulo
