export const imprimirMatriz = matriz => {
    matriz.forEach(fila => {
        fila.forEach(elemento => {
            console.log(elemento);
        });
    });
};