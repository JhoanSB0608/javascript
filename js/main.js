import prompt from 'async-prompt'
import { getAllProfile, postProfile } from './module/camper.js';

let name = await prompt("Ingrese el name: ")
console.log(await postProfile(name));
console.log(await getAllProfile(name));