import prompt from 'async-prompt';
import { calcularImpuestos } from "./module/calcularImpuestos.js"

let ingresos = await prompt("Ingrese sus ingresos: ")

console.log(calcularImpuestos(ingresos))