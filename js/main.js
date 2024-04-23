import prompt from 'async-prompt';
import { max } from "./module/encontrarNumerMaximo.js";

const input = await prompt("Ingrese los números separados por espacios: ");
const numbers = input.split(" ").map(Number);
console.log(max(numbers));