export const posiciones = arr => arr.reduce((acc, num, index) => {
    if (num % 2 === 0) {
      acc.push(index);
    }
    return acc;
  }, []);