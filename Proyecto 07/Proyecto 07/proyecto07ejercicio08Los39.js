/* -Fecha de publicación: Junio 18
- Hora: 12:10 AM
- Versión de su código: 1
- Autor: Los 39 ingenieros del BootCamp
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: ECMAScript 6
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripcion: Este programa pide dos números y realiza suma, multiplicación, divición y resta*/

const prompt = require('prompt-sync')(); // Se importa la libreria prompt-sync

let numero1 = parseFloat(prompt("Ingrese un número: ")); // Se pide un numero por consola
let numero2 = parseFloat(prompt("Ingrese otro número: ")); // Se pide otro numero por consola

console.log(`Suma: ${numero1 + numero2}`); // Se realiza e imprime la suma de los numeros pedidos por consola
console.log(`Resta: ${numero1 - numero2}`); // Se realiza e imprime la resta de los numero pedidos por consola
console.log(`Multiplicación: ${numero1 * numero2}`); // Se realiza e imprime la multiplicación de los numeros pedidos por consola
if (numero2 == 0) // Se realiza la verificacion de si el divisor es 0
    console.log("Divición: No se puede dividir por 0"); // Si el divisor es 0 se imprime un mensaje
else console.log(`Divición: ${numero1 /  numero2}`) // Si el divisor es diferente de 0 se realiza e imprime la divición de los numeros pedidos por consola
