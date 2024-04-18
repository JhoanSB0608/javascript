export function duplicar (arr) {
    let new_rr = arr.map(num => num*2);
    return new_rr;
}

console.log(duplicar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));