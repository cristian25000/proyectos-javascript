/* -Fecha de publicación: Junio 18
- Hora: 12:20 AM
- Versión de su código: 1
- Autor: Los 39 ingenieros del BootCamp
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: ECMAScript 6
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripcion: Este programa encuentra el angulo faltante de un triangulo*/

const prompt = require('prompt-sync')(); // Se importa la libreria prompt-sync

let angulo1 = parseInt(prompt("Ingrese el primer angulo: ")); // Se pide por consola el primer angulo
let angulo2 = parseInt(prompt("Ingrese el segundo angulo: ")); // Se pide por consola el segundo angulo

if (angulo1 <= 0 || angulo2 <= 0) // Se vefica si alguno de los angulos es menor o igual a 0
    console.log("Los angulos no pueden ser menores o iguales a 0"); // Si alguno de los angulos es menor a 0 se imprime un mensaje
else if (angulo1 + angulo2 >= 180) // Se verifica que la suma de los dos angulos pedidos por consola no sean mayor o igual a 180
    console.log("La suma de los dos angulos no debe ser mayor a 180°"); // Si la suma de los dos angulas es mayor o igual a 180 se imprime un mensaje
else console.log(`El valor del tercer angulo de un triangulo con angulo de ${angulo1} y ${angulo2} es de ${180 - angulo1 - angulo2}°`)
// Si la suma de los dos angulos es menor a 180 grados se realiza e imprime el resultado del tercer angulo 
