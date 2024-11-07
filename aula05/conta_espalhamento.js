function dadosConta(nome,conta) {

    let defaultParams = {
        saldoInicial: 0.0,
        limiteChequeEspecial:0.0,
        taxaRemSldEmConta: 0.01
    }

    return {
        nome:nome,
        conta:conta,
        ...defaultParams
    }
}

console.log(dadosConta('Enzo',55115));