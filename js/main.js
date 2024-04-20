import prompt from 'async-prompt';
import {contrasenaValida} from "./module/contrasenaValida.js"

let contrasena = await prompt ("Ingrese su contraseña: ")

console.log(contrasenaValida(contrasena))