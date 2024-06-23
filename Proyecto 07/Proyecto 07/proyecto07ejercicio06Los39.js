/* -Fecha de publicación: Junio 18
- Hora: 11:50 PM
- Versión de su código: 1
- Autor: Los 39 ingenieros del BootCamp
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: ECMAScript 6
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripcion: Este programa imprimi convierte minutos en horas y minutos*/

const prompt = require('prompt-sync')(); //Se importa la librería prompt-sync

let minutos = parseInt(prompt("Ingrese los minutos: ")); // Se solicita al usuario ingresar los minutos
let horas = Math.floor(minutos / 60); // Se realiza la conversión de minutos a horas
let minutosRestantes = minutos % 60; // Se obtienen los minutos restantes

console.log(`${minutos} equivalen a ${horas} horas y ${minutosRestantes} minutos`); // Se imprime por consola el total de horas y minutos solicitado
