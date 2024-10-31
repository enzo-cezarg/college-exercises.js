class Coelho {

    static instanciasCriadas = 0;
    #raca;
    #peso;

    constructor(raca, peso) {
        Coelho.instanciasCriadas++;
        this.#raca = raca;
        this.#peso = peso;
    }

    get raca() { return this.#raca };
    get peso() { return this.#peso };

    toString() {
        return `Raça: ${this.#raca} | Peso: ${this.#peso}`
    }

}

console.log(`Instâncias no primeiro momento: ${Coelho.instanciasCriadas}`);

let x = new Coelho('Angorá Inglês', 3.2);
let y = new Coelho('Belier', 3.65);
let z = new Coelho('Cabeça de Leão', 1.58);
let a = new Coelho('Gigante de Flandres', 8.89);
let b = new Coelho('Toy', 1.12);

console.log(`Instâncias no final do programa: ${Coelho.instanciasCriadas}`);

console.log(`\nCoelhos:\n`);
console.log(x.toString());
console.log(y.toString());
console.log(z.toString());
console.log(a.toString());
console.log(b.toString());