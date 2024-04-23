import prompt from 'async-prompt';
import {numeroDeCaracteres} from "./module/numeroDeCaracteres.js"

const cadena = await prompt("Por favor, ingrese una cadena: ");
    const caracter = await prompt("Por favor, ingrese un carácter: ");
    console.log("Número de veces que aparece el carácter:", numeroDeCaracteres(cadena, caracter));