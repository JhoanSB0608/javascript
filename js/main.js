import prompt from 'async-prompt';
import {palabrasANumeros} from "./module/palabrasANumeros.js"

const input = await prompt("Ingrese las palabras en minuscula y separadas por espacios: ");
const palabrasIngresadas = input.trim().split(" ");

console.log(palabrasANumeros(palabrasIngresadas));