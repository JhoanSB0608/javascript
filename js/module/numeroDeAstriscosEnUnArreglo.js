export const numAsteriscos = cadena => {
    return cadena.split('').reduce((contador, caracter) => {
      return contador + (caracter === '*' ? 1 : 0);
    }, 0);
  }