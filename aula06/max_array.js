function max(array) {
    let maior = array[0];

    array.forEach(element => {
        element > maior ? maior = element : maior = maior
    });

    return maior;
}

let a = [1,2,3,4,6,7,8,9,121,552,23,353,63,63,232];

console.log(max(a));