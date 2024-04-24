export const palabrasANumeros = palabras => {
    const numeros = {
      "cero": 0,
      "uno": 1,
      "dos": 2,
      "tres": 3,
      "cuatro": 4,
      "cinco": 5,
      "seis": 6,
      "siete": 7,
      "ocho": 8,
      "nueve": 9
    };
  
    return palabras.map(palabra => numeros[palabra] !== undefined ? numeros[palabra] : -1);
  };
  