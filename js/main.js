import prompt from 'async-prompt';
import {sumarRango} from "./modulo/sumarRangodeNumero.js"; 

let num1 = Number(await prompt ("Ingrese el número 1: ") );
let num2 = Number(await prompt ("Ingrese el número 2: ") );

console.log(sumarRango(num1, num2));