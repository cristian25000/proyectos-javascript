/* -Fecha de publicación: Junio 18
- Hora: 12:40 AM
- Versión de su código: 1
- Autor: Los 39 ingenieros del BootCamp
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: ECMAScript 6
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripcion: Este programa convierte horas, minutos y segundos a milisegundos*/

const prompt = require('prompt-sync')(); // Se importa la libreria prompt-sync

let horas = parseInt(prompt("Ingrese las horas: ")); 
let minutos = parseInt(prompt("Ingrese los minutos: "));
let segundos = parseInt(prompt("Ingrese los segundo: ")); 

let milisegundos = horas*3600*60 + minutos*60*60 + segundos*60;

console.log(`la cantidad de milisegundos para ${horas} hora, ${minutos} minutos y ${segundos} es de ${milisegundos}`); 
