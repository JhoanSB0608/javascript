import prompt from 'async-prompt';
import {IMC} from "./modulo/IMC.js";

let peso = await prompt ("Ingrese su peso: ");
let altura = await prompt ("Ingrese su altura: ");

console.log(IMC(peso, altura));