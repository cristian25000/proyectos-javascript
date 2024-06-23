/* -Fecha de publicación: Junio 18
- Hora: 11:40 PM
- Versión de su código: 1
- Autor: Los 39 ingenieros del BootCamp
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: ECMAScript 6
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripcion: Este programa convierte horas y minutos en minutos*/

const prompt = require('prompt-sync')(); //Se importa la librería prompt-sync

let horas = parseInt(prompt("Ingrese las horas: ")); // Se solicita al usuario ingresar las horas
let minutos = parseInt(prompt("Ingrese los minutos: ")); // Se solicita al usuario ingresar los minutos

let totalMinutos = (horas * 60) + minutos; // Se realiza la conversión de horas y minutos a minutos

console.log(`${horas} hora y ${minutos} equivalen a ${totalMinutos}`) // Se imprime por consola el total de minutos solicitado
