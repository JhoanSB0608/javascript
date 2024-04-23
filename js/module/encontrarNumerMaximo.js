export const max = arr => {
    let maxNumber = arr[0];
    arr.forEach(num => {
      if (num > maxNumber) {
        maxNumber = num;
      }
    });
    return maxNumber;
  };  