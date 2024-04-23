export const capitalizar = cadena => {
    return cadena.split("").map(letra => letra.toUpperCase()).join("");
};
