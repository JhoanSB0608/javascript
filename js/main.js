import prompt from 'async-prompt';
import {imprimirMatriz } from "./module/imprimirMatriz.js"

let entrada = '';
let matriz = [];
while (true) {
  const fila = await prompt("Ingrese una fila de la matriz (ingrese 'fin' para terminar): ");
  if (fila.toLowerCase() === 'fin') {
    break;
  }
  entrada += fila + ';';
}
const filas = entrada.split(";").filter(Boolean); 
matriz = filas.map(fila => fila.split(" ").map(Number));
imprimirMatriz(matriz)