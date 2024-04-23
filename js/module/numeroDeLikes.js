export const likes = (numero) => {
    if (numero < 1000) {
        return numero.toString();
    } else if (numero < 1000000) {
        return (numero / 1000).toFixed(0) + "K";
    } else {
        return (numero / 1000000).toFixed(0) + "M";
    }
}