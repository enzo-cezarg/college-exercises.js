import { validate } from "bycontract";

class Ferroviaria {
    #vagoesArmazenados;

    constructor() {
        this.#vagoesArmazenados = new Array;
    }

    get vagoesArmazenados() { return this.#vagoesArmazenados.values() };

    adicionarVagao(vagao) {
        validate(vagao,Vagao);
        this.#vagoesArmazenados.push(vagao);
    }

    quantidadeVagoes() {
        return this.#vagoesArmazenados.length;
    }

    capacidadeMaior(capacidade) {
        let vagoes = [];
        if (this.quantidadeVagoes() > 0) {
            for (let i = 0; i < this.quantidadeVagoes(); i++) {
                if (this.#vagoesArmazenados[i].capacidade >= capacidade) {
                    vagoes.push(this.#vagoesArmazenados[i]);
                }
            }
        }
        return vagoes;  
    }

    removerVagao(codigo) {
        let vagao = undefined;
        if (this.quantidadeVagoes() > 0) {
            for (let i = 0; i < this.quantidadeVagoes(); i++) {
                if (this.#vagoesArmazenados[i].codigo === codigo) {
                    vagao = this.#vagoesArmazenados.splice(i, 1);
                    break;
                }
            }
        }        
        return vagao;
    }

}

class Vagao {
    #codigoVagao;
    #capacidadeDeCarga;

    constructor(codigo, capacidade) {
        this.#codigoVagao = codigo;
        this.#capacidadeDeCarga = capacidade;
    }

    get codigo() { return this.#codigoVagao };
    get capacidade() { return this.#capacidadeDeCarga};

    toString() {
        let str = `Código: ${this.#codigoVagao} | Capacidade: ${this.#capacidadeDeCarga}`;
        return str;
    }

}

let ferroviaria = new Ferroviaria();

let x = new Vagao('0001', 1000);
let y = new Vagao('0002', 2000);
let z = new Vagao('0003', 3500);

ferroviaria.adicionarVagao(x);
ferroviaria.adicionarVagao(y);
ferroviaria.adicionarVagao(z);

console.log('\nVagões estacionados: ');
for (let v of ferroviaria.vagoesArmazenados) {
    console.log(v.toString());
}

console.log('\n===============================');
ferroviaria.removerVagao('0002');
console.log('Removendo vagão 0002: ');
for (let v of ferroviaria.vagoesArmazenados) {
    console.log(v.toString());
}

console.log('\nVagões com a capacidade maior que 1200 toneladas: ');
let vagoesMaiores = ferroviaria.capacidadeMaior(1200);
for (let i = 0; i < vagoesMaiores.length; i++) {
    console.log(vagoesMaiores[i].toString());
}