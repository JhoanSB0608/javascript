import prompt from 'async-prompt';
import {posiciones} from "./module/encontrarPosicionesNumerosPares.js"

const input = await prompt("Ingrese los números separados por espacios: ");
const numbers = input.split(" ").map(Number);
console.log(posiciones(numbers)); 