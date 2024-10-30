import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});

let precoIngresso = 500;
let liberaCategoria = false;

while (true) {
    console.log('Categorias:\n\n1. Público Geral\n2. Convidado\n3. Idoso\n4. Funcionário\n5. Funcionário Idoso\n6. Criança\n');
    let categoriaUsuario = prompt('Selecione sua categoria (1, 2, 3...): ');

    switch (categoriaUsuario) {
        case '1':
            liberaCategoria = true;
            break;
        case '2':
            liberaCategoria = true;
            precoIngresso *= 0.75;
            break;
        case '3':
            liberaCategoria = true;
            precoIngresso *= 0.5;
            break;
        case '4':
            liberaCategoria = true;
            precoIngresso *= 0.5;
            break;
        case '5':
            liberaCategoria = true;
            precoIngresso *= 0.5*0.5;
            break;
        case '6':
            liberaCategoria = true;
            precoIngresso = 0;
            break;
        default:
            console.log('Categoria Inválida!');
            console.log('=====================================\n')
            break;
    }

    if (liberaCategoria) {
        break;
    }

}

console.log('=======================================================');
console.log(`Valor total do ingresso: R$ ${precoIngresso.toFixed(2)}`);