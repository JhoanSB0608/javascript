import prompt from 'async-prompt';
import { calcularImpuestos } from "./module/calcularImpuestos.js";

let edad = await prompt ("Ingrese su edad: ");
let ingreso = await prompt ("Ingrese su ingreso: ");

console.log(calcularImpuestos(edad, ingreso))