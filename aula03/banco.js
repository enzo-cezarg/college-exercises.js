import { validate } from "bycontract";

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
        let str = `Conta: ${this.#numero} | Saldo: ${this.#saldo.toFixed(2)} `;
        return str;
    }
}

globalThis.ContaComum = ContaComum;

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

    get limite() { return this.#limite };

    retirada(valor) {
        if (valor <= super.saldo + this.#limite) {
            this.atualizarSaldo(super.saldo - valor);
            return valor;
        }
    }
}

function imprimeDados(conta) {
    validate(conta,ContaComum);
    console.log(conta.toString());
    if (conta instanceof ContaLimite) {
        console.log(conta.limite);
    }
}

function depositaTodos(contas, valor) {
    validate(arguments,["Array.<ContaComum>","Number"]);
    for (let i = 0; i < contas.length; i++) {
        contas[i].deposito(valor);
    }
}

function jurosGeral(contas, taxa) {
    validate(arguments,["Array.<ContaComum>","Number"]);
    for (let conta of contas) {
        if (conta instanceof ContaPoupanca) {
            conta.computaJuros(taxa);
        }
    }
}

function imprimeSaldos(contas) {
    validate(contas,"Array.<ContaComum>");
    for (let conta of contas) {
        console.log(`Conta: ${conta.numero} | Saldo: ${conta.saldo.toFixed(2)}`);
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
console.log('\n=======================\n')

console.log('Conta e limite:');
imprimeDados(z);
console.log();

// 1. Recebe um array de ContaComum e um valor para ser depositado em todas as contas.
console.log(`${x.toString()}\n${y.toString()}\n${z.toString()}\n`);
depositaTodos([x, y, z], 1000);
console.log(`${x.toString()}\n${y.toString()}\n${z.toString()}\n`);

// 2. Recebe um array de contas e credita juros pra todas as contas do tipo ContaPoupanca.
jurosGeral([x, y, z], 23);

// 3. Imprime todos os saldos de um array de contas.
imprimeSaldos([x, y, z]);