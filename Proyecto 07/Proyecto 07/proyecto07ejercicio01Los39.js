/* -Fecha de publicación: Junio 18
- Hora: 11:00 PM
- Versión de su código: 1
- Autor: Los 39 ingenieros del BootCamp
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: ECMAScript 6
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripcion: Este programa convierte una temperatura en grados Celcius a grados Fahrenheit. */

const prompt = require('prompt-sync')(); //Se importa la librería prompt-sync

let gradosCentigrados = parseFloat(prompt("Ingrese la temperatura en Celcius: ")); // Se solicita al usuario ingresar la temperatura en grados Celcius

let gradosFahrenheit = (gradosCentigrados * 9/5) + 32; // Se realiza la conversión de grados Celcius a grados Fahrenheit

console.log(`${gradosCentigrados}°C son ${gradosFahrenheit}°F`) // Se imprime por consola la temperatura solicitada en grados Fahrenheit
