export const transcribir = cadena => {
    const complementos = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U'
    };

    return cadena.split('').map(nucleotido => complementos[nucleotido]).join('');
};