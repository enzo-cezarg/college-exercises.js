import { validate } from "bycontract";

import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});

class ContaCorrente {
    #saldo;

    constructor(saldoInicial) {
        validate(saldoInicial, "number");
        verificaValorNegativo(saldoInicial);
        this.#saldo = saldoInicial;
    }

    deposito(valor) {
        validate(valor, "number");
        verificaValorNegativo(valor);
        this.#saldo += valor;
    }

    retirada(valor) {
        validate(valor, "number");
        verificaValorNegativo(valor);
        if (valor > this.#saldo) { throw new Error('Saldo insuficiente!') };
        this.#saldo -= valor;
    }

    get saldo() {
        return this.#saldo;
    }
}

function verificaValorNegativo(valor) {
    if (valor < 0) {
        throw new Error('Valor negativo informado!');
    }
}

let x = new ContaCorrente(0);
let opt = 0;

while (opt != 4) {

    console.log('\n================================\n');
    console.log('  1. Depositar\n  2. Retirar\n  3. Ver o saldo\n  4. Fim');
    console.log('\n================================\n');

    opt = Number(prompt('Selecione uma opção: '));

    switch (opt) {
        case 1:
            let valorDeposito = Number(prompt('Informe o valor do depósito: '));
            x.deposito(valorDeposito);
            console.log('Depósito realizado com sucesso!');
            break;
        case 2:
            let valorSaque = Number(prompt('Informe o valor do depósito: '));
            x.retirada(valorSaque);
            console.log('Saque realizado com sucesso!');
            break;
        case 3:
            console.log(`Saldo: ${x.saldo}`)
            break;
        case 4:
            break;
    }
}

console.log('Programa finalizado!');