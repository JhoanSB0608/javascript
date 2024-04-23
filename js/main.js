import prompt from 'async-prompt';
import {transcribir} from "./module/transcribirADNaARN.js"

const cadenaADN = await prompt("Ingrese una cadena de ADN: ");
console.log("El complemento ARN es:", transcribir(cadenaADN));