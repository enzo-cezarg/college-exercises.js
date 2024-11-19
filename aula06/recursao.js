function f(x) {
    if (x === 0) { return 1; }
    return x * f(x-1);
}

console.log(f(0));
console.log(f(1));
console.log(f(5));

function somar(array) {
    if (array.length === 0) { return 0 }
    const [primeiro, ...resto] = array;
    return primeiro + somar(resto);
}

let numeros = [1,2,5,6,7,4,2,123,5,2,5,2,6];
let somatorio = somar(numeros);
console.log(somatorio);