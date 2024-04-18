import prompt from 'async-prompt';
import {sumarRango} from "./module/sumarRangoDeNumeros.js"

let num1 = Number(await prompt ("Ingrese el numero 1: "))
let num2 = Number(await prompt ("Ingrese el numero 2: "))

console.log(sumarRango(num1, num2));