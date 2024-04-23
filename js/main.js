import prompt from 'async-prompt';
import {likes} from "./module/numeroDeLikes.js"

const seguidores = parseInt(await prompt("Ingrese el número de seguidores: "));
    console.log("Likes:", likes(seguidores));