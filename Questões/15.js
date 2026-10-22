/* Eu achei a questão difícil. Tive que pensar bastante pra fazer essa, e teve muitas coisas que eu tive dificuldade antes, como o for-of, e alguns problemas com escopo.
A entrada foi: O array de objetos, que cada um é um item.
O processamento foi: O calculo do subtotal e o preço final.
A saída: O valor total
Eu pensei em: receber o array, depois fazer o calculo do carrinho (quantidade x produto), e por fim mostrar o resultado.
obs: usei o NotebookLM pra me ajudar em algumas, esqueci de colocar nas outras questões*/
function receberCarrinho(){
    let tamanho = Number(prompt("Digite o numero de itens do carrinho"))
    const carrinho = []
    for(let i = 0; i < tamanho; i++){
       const item = {
        preco: Number(prompt("Digite o preço do produto")),
        quantidade: Number(prompt("Digite a quantidade do produto")),
    }
      carrinho.push(item)
    }
    return carrinho
}
function calcularTotalCarrinho(carrinho){
    let soma = 0
    for(let item of carrinho){
      let subtotal = calcularSubtotalItem(item)
      soma += subtotal
    }
    return soma
}
function calcularSubtotalItem(produto){
    let subtotal = produto.preco * produto.quantidade
    return subtotal
}
function mostrarValor(total){
    alert(`O valor total da compra foi de R$ ${total}`)
}
let compras = receberCarrinho()
let resultado = calcularTotalCarrinho(compras)
mostrarValor(resultado)