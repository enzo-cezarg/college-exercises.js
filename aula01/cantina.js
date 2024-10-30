import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});

let valorSuco = 5.2;
let valorSanduiche = 12;

let qtdSucos = Number(prompt('Quantos sucos foram consumidos? '));
let qtdSanduiches = Number(prompt('Quantos sanduíches foram consumidos? '));

let valorDescontoSuco = (qtdSucos >= 10) ? valorSuco*qtdSucos*0.2 : 0;
let valorDescontoSanduiche = (qtdSanduiches >= 10) ? valorSanduiche*qtdSanduiches*0.2 : 0 

console.log(`Recibo:\nSuco: R$ ${valorSuco}, Quantidade: ${qtdSucos}, Valor sem desconto: ${(valorSuco*qtdSucos).toFixed(2)}, Valor do desconto: R$ ${(valorDescontoSuco).toFixed(2)}, Total: R$ ${((valorSuco*qtdSucos)-valorDescontoSuco).toFixed(2)}`);
console.log(`Sanduiche: R$ ${valorSanduiche}, Quantidade: ${qtdSanduiches}, Valor sem desconto: ${(valorSanduiche*qtdSanduiches).toFixed(2)}, Valor do desconto: R$ ${(valorDescontoSanduiche).toFixed(2)}, Total: R$ ${((valorSanduiche*qtdSanduiches)-valorDescontoSanduiche).toFixed(2)}`);

let custoTotal = ((valorSuco*qtdSucos)-valorDescontoSuco) + ((valorSanduiche*qtdSanduiches)-valorDescontoSanduiche);
console.log(`Custo total a pagar: R$ ${custoTotal.toFixed(2)}`);