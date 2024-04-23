import prompt from 'async-prompt';
import {capitalizar} from "./module/capitalizarPalabra.js"

const entrada = await prompt("Ingrese palabras separadas por espacios: ");
    const palabras = entrada.split(" ").map(palabra => capitalizar(palabra));
    console.log("Palabras capitalizadas:", palabras.join(" "));