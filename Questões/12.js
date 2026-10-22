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