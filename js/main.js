import prompt from "async-prompt";
import {numerosAPalabras} from "./module/numerosAPalabras.js";

let list = [];
let bandera = undefined;

do{
    list.push(Number(await prompt("Ingrese numeros: ")))
    bandera = Number(await prompt ("Deseas ingresar otro numero? 0.No 1.Si"))
}while(bandera)

console.log(numerosAPalabras(list))