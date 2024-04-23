export const min = arr => {
    let minNumber = arr[0];
    arr.forEach(num => {
      if (num < minNumber) {
        minNumber = num;
      }
    });
    return minNumber;
  };