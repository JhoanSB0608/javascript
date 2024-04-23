export const password = str => {
    return str.toLowerCase()
              .replace(/ /g, '')
              .replace(/a/g, '4')
              .replace(/e/g, '3')
              .replace(/i/g, '1')
              .replace(/o/g, '0');
  };