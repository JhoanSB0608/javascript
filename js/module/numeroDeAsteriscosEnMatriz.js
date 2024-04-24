export const numAsteriscos = matriz => {
    return matriz.reduce((total, fila) => {
        return total + fila.reduce((contador, elemento) => {
            return contador + (elemento === '*' ? 1 : 0);
        }, 0);
    }, 0);
};
