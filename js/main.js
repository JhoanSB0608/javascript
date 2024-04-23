import prompt from 'async-prompt';
import {imprimirArreglo} from "./module/imprimirUnArreglo.js"

const palabras = await prompt("Por favor, ingrese algunas palabras separadas por espacio: ");
const arregloPalabras = palabras.split(" ");
imprimirArreglo(...arregloPalabras);