import prompt from 'async-prompt';
import {removerCeros} from "./module/removerCeros.js"

const entrada = await prompt("Ingrese una lista de números separados por espacios: ");
    const numeros = entrada.split(" ").map(numero => parseInt(numero));
    console.log("Arreglo sin ceros:", removerCeros(numeros));