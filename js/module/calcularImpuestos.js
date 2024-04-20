export const calcularImpuestos = (ingresos, edad) => {
    let impuestos = 0;
    if (edad >= 18 && ingresos >= 1000) {
        impuestos = ingresos * 0.4;
    }
    return impuestos;
}
