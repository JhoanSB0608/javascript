import prompt from 'async-prompt';
import {numAsteriscos} from "./module/numeroDeAstriscosEnUnArreglo.js"

const cadena = await prompt("Ingrese una cadena de asteriscos: ");
const cantidadAsteriscos = numAsteriscos(cadena);

console.log("Número de asteriscos:", cantidadAsteriscos);