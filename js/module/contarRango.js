export const contarRango = (num1, num2) => {
    let cont = 0;
    for (let i = num1 +1; i < num2; i++) {
        cont++;
    }
    return cont;
}