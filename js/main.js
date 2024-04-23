import prompt from 'async-prompt';
import {pares} from "./module/encontrarNumerosParesEnUnArreglo.js"

const input = await prompt("Ingrese los números separados por espacios: ");
const numbers = input.split(" ").map(Number); 
console.log(pares(numbers));