class ContaComum {
    #numero;
    #saldo;

    constructor(numero) {
        this.#numero = numero;
        this.#saldo = 0;
    }

    get numero() { return this.#numero };            
    get saldo() { return this.#saldo };

    deposito(valor) {
        this.#saldo += valor; 
    }

    retirada(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
            return valor;
        }
    }

    atualizarSaldo(saldo) {
        this.#saldo = saldo;
    }

    toString() {
        let str = `Conta: ${this.#numero} | Saldo: ${this.#saldo} `;
        return str;
    }
}

class ContaPoupanca extends ContaComum {
    
    constructor(numero) {
        super(numero);
    }

    computaJuros(taxa) {
        this.atualizarSaldo(super.saldo + (super.saldo*(taxa/100)));
    }

}

class ContaLimite extends ContaComum {
    #limite;
    
    constructor(numero, limite) {
        super(numero);
        this.#limite = limite;
    }

    retirada(valor) {
        if (valor <= super.saldo + this.#limite) {
            this.atualizarSaldo(super.saldo - valor);
            return valor;
        }
    }
}

let x = new ContaComum(1);

console.log('\nBANCO ACME: \n')

x.deposito(Number(1000));
console.log(x.toString());

console.log('\n=======================\n');

let y = new ContaPoupanca(2);
y.deposito(1000);
y.computaJuros(20);
console.log(y.toString());

console.log('\n=======================\n');

let z = new ContaLimite(3, 300);
z.deposito(1000);
let saque = z.retirada(1250);
console.log(z.toString());
console.log(`Valor sacado: ${saque}`);