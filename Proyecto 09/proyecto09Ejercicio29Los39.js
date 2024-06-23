/*
- Fecha de publicación: [18/06/2024]
- Hora: 9:34 pm
- 0.0.2
- Autores: [Todos los ingenieros del grupo (39)]
- Nombre del lenguaje utilizado: [Javascript]
- Versión del lenguaje utilizado: [ECMAScript 6]
- Presentado a: [Doctor Ricardo Moreno Laverde]

------- | Universidad Tecnológica de Pereira |-------------
--- | Programa de Ingeniería de Sistemas y Computación |---

- Descripción:
Recrear la serie de tayler de la funcion e^x con las nth iteraciones que indique el usuario 
*/

// Funcion factoriol(n)
// Parametros: n: número entero
// Retorno: n! (factorial de n)
// Descripción: Calcula el factorial de un número n de manera recursiva.
function factorial(n) {
    // Condición de terminación (caso base)
    if (n === 0 || n === 1) {
        return 1;
    }
    // Llamada recursiva
    return n * factorial(n - 1);
}

const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );



rl.question("Ingrese el valor de x: ", (x) => { rl.question("Ingrese el numero de terminos: ", (terminos) => { sum = calcularTaylor(terminos, x); console.log(`Con ${terminos} términos, e^(${x}) = ${sum}`);rl.close()}) });


function calcularTaylor(nTerminos, xValor){
let sum = 0;
for (let i = 0; i < nTerminos; i++) {
    sum += xValor ** i / factorial(i);
}
return sum
}
