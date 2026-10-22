/* Eu achei a questão fácil. Não tive dúvidas.
A entrada foi: o objeto item.
O processamento foi: formatação da string do item.
A saída: A mensagem final.
Eu pensei em: receber o objeto item, formatar a string, e depois usar um alert pra mostrar a frase final.*/

function receberItem(){
    const item = {
        nome: prompt("Digite o nome do item"),
        preco: Number(prompt("Digite o preço do item")),
        quantidade: Number(prompt("Digite a quantidade do produto em estoque")),
    }
    return item
}
function exibirResumoProduto(produto){
    alert(`Produto: ${produto.nome} | Preço: R$ ${produto.preco} | Estoque: ${produto.quantidade} unidades`)
}
let objeto = receberItem()
exibirResumoProduto(objeto)