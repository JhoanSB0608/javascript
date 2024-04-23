import prompt from 'async-prompt';
import {fizzBuzz} from "./module/fizzBuzz.js"

const numero = parseInt(await prompt("Por favor, ingrese un número: "));
console.log("Resultado:", fizzBuzz(numero));