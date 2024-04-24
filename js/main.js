import prompt from 'async-prompt';
import { distancia } from "./module/distanciaEntreDosStrings.js"

const str1 = await prompt("Ingrese el primer string: ");
const str2 = await prompt("Ingrese el segundo string: ");
const resultado = distancia(str1, str2);

console.log("Distancia entre los strings:", resultado);