import prompt from 'async-prompt';
import {min} from "./module/encontrarNumeroMinimo.js"

const input = await prompt("Ingrese los números separados por espacios: ");
const numbers = input.split(" ").map(Number);
console.log(min(numbers)); 