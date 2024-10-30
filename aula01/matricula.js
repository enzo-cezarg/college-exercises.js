import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});

function acrescentaVerificador(matricula, nivelAcesso=21) {
    let digitos = matricula;
    let soma = 0;

    while (digitos.length != 1) {
        for (let i = 0; i < digitos.length; i++) {
            soma += Number(digitos[i]);
        }
        digitos = String(soma);
        soma = 0;
    }

    matricula = nivelAcesso + matricula + '-' + digitos;
    return matricula;
}

let matricula = prompt('Digite o número de matrícula: ');
let matriculaCompleta = acrescentaVerificador(matricula);
console.log(`Número de matrícula: ${matriculaCompleta}`);
