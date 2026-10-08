/* Eu achei a questão média. Eu tive dúvida com escopos e sintaxe (da porcentagem).
A entrada foi: O valor da venda
O processamento foi: o if-else do desconto
A saída: o valor com ou sem desconto
Eu pensei em: primeiro, receber o valor total, depois usar o if else pra porcentagem e usar alert pra mostrar o valor. */

function processarVenda(pct){
    let v = Number(prompt("Qual o valor total da venda: "));
    if(v > 100){
        v = aplicarDesconto(v);
        alert(`O valor total com desconto é R$ ${v}`);
    } else{
    alert(`O valor total é ${v}`)
    }
}

function  aplicarDesconto(v) {
    return v - (v * 0.10);
}
processarVenda()


