import prompt from 'async-prompt';
import { numAsteriscos } from "./module/numeroDeAsteriscosEnMatriz.js"

const matrizStr = await prompt("Ingrese la matriz de asteriscos (cada fila separada por ', ' y cada elemento de la fila separado por espacio): ");
const matriz = matrizStr.split(', ').map(fila => fila.split(' '));
const cantidadAsteriscos = numAsteriscos(matriz);

console.log("Número de asteriscos:", cantidadAsteriscos);