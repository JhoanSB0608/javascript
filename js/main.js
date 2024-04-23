import prompt from 'async-prompt';
import {password} from "./module/generarContraseña.js"


const input = await prompt("Ingrese la contraseña: ");
const result = await password(input);
console.log(result);