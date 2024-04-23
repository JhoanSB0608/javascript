export const numeroDeCaracteres = (cadena, caracter) => {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter) {
            contador++;
        }
    }
    return contador;
}