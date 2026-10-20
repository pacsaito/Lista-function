/* Eu achei a questão fácil. Não tive dúvidas
A entrada foi: O capital, a taxa e o tempo.
O processamento foi: o calculo dos juros.
A saída: o valor dos juros.
Eu pensei em: primeiro receber, depois calcular, e depois usar um alert pra mostrar na tela.*/

function receberJurosSimples(){
    let cap = Number(prompt("Qual o capital?: "));
    let tax = Number(prompt("Qual a taxa?(Digite em porcentagem): "));
    let t = Number(prompt("Qual o tempo?(em meses): "));
    calcularJurosSimples(cap, tax, t)
}

function calcularJurosSimples(cap, tax, t) {
    let juros = cap * (tax/100) * t;
    sairJurosSimples(juros)
}

function sairJurosSimples(juros) {
    alert(`O valor do juros será R$ ${juros}`);
}

receberJurosSimples()