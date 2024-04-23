import prompt from 'async-prompt';
import {multiplicarArreglo} from "./module/multiplicarArreglo.js"

const entrada = await prompt("Ingrese una lista de números separados por espacios: ");
    const numeros = entrada.split(" ").map(numero => parseInt(numero));
    console.log("El producto de los números ingresados es:", multiplicarArreglo(numeros));