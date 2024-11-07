function clone(obj, nome) {
    return {...obj,nome:nome}
}

let antonio = {nome:'antonio',peso:10,altura:170};
let luis = clone(antonio,'luis');

console.log(antonio);
console.log(luis);