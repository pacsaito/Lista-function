/* Eu achei a questão fácil. Tive dúvidas com os escopos.
A entrada foi: O saldo e o valor do produto.
O processamento foi: a diferença entre o valor e o produto.
A saída: A frase se o saldo é sufuciente ou não.
Eu pensei em: fazer uma function para receber os valores, depois uma pra verificar se o saldo é suficiente, e, por fim, sair a frase com o if else.*/

function verificarOrcamento(saldo, valor) {
    let result;

    if (saldo >= valor) {
        result =  true;
    } else {
        result =  false;
    }
    sairOrcamento(result)
}

function receberOrcamento() {
    let saldo = Number(prompt("Digite o seu saldo total: "));
    let valor = Number(prompt("Digite o valor do produto: "));
    verificarOrcamento(saldo, valor)
}

function sairOrcamento(result) {
    if(result === true) {
        alert("O saldo é suficiente para a compra ");
    } else {
        alert("Saldo insuficiente");
    }
}

receberOrcamento()