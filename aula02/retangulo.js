import { validate } from 'bycontract';

import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});

class Retangulo {
    #largura;
    #altura;

    constructor(largura, altura){
        validate(arguments, ["Number", "Number"]);
        this.#largura = largura;
        this.#altura = altura;
    }

    get largura() { return this.#largura };
    get altura() { return this.#altura };

    perimetro() {
        return (this.#largura*2) + (this.#altura*2);
    }

    area() {
        return this.#altura*this.#largura;
    }

    toString() {
        return `Perímetro: ${this.perimetro()} | Área: ${this.area()}`
    }
}

let largura = Number(prompt('Digite um valor para a largura: '));
let altura = Number(prompt('Digite um valor para a altura: '));

let x = new Retangulo(largura, altura);

console.log('==============================')
console.log(x.toString());