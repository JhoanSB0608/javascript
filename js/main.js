import prompt from 'async-prompt';
import { empiezanConA } from "./module/encontrarPalabrasPorA.js"

const input = await prompt("Ingrese las palabras separadas por espacios: ");
const words = input.split(" ");
console.log(empiezanConA(words));