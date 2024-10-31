import { validate } from "bycontract";

class Carta {
    #naipe;
    #valor;

    constructor(naipe, valor) {
        validate(arguments, ["String", "String"]);
        this.#naipe = naipe;
        this.#valor = valor;
    }

    get naipe() { return this.#naipe };
    get valor() { return this.#valor };

}

class Baralho {
    #cartas;

    constructor() {
        let naipe;
        let cartas = new Array;

        for (let i = 0; i < 4; i++) {
            switch (i) {
                case 0: naipe = 'Paus'; break;
                case 1: naipe = 'Espadas'; break;  
                case 2: naipe = 'Copas'; break;
                case 3: naipe = 'Ouros'; break;
            }

            for (let j = 0; j < 13; j++) {
                switch (j) {
                    case 0: cartas.push(new Carta(naipe, 'A')); continue;                    
                    case 10: cartas.push(new Carta(naipe, 'J')); continue;
                    case 11: cartas.push(new Carta(naipe, 'Q')); continue;
                    case 12: cartas.push(new Carta(naipe, 'K')); continue;
                }
                cartas.push(new Carta(naipe, String(j)));
            }
        }

        this.#cartas = cartas;
    }

    get cartas() { return this.#cartas };

    embaralharBaralho() {
        for (let i = 0; i < 1000; i++) {
            let i1 = Math.floor(Math.random()*52);
            let i2 = Math.floor(Math.random()*52);
            let aux = this.#cartas[i1];
            this.#cartas[i1] = this.#cartas[i2];
            this.#cartas[i2] = aux;
        }
    }
        
    toString() {
        for (let i = 0; i < this.#cartas.length; i++) {
            console.log(`${this.#cartas[i].valor} de ${this.#cartas[i].naipe}`);
        }
    }
}

let x = new Baralho();
x.toString();
console.log('\n\n');

x.embaralharBaralho();
x.toString();