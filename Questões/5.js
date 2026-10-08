/* Eu achei a questão difícil. Eu tive bastante dúvida com o for-of, e algumas partes dos escopos.
A entrada foi: o tamanho do vetor e os valores.
O processamento foi: a soma dos valores.
A saída: o valor da soma dos valores
Eu pensei em: primeiro, receber o tamanho do vetor, receber os valores, depois calcular a soma e usar alert pra mostrar a soma. */
function leValores(){
    const vetor = []
    let tam = Number(prompt("Digite quantos elementos tem o vetor: "))
    for(let i = 0; i < tam; i++){
        let v = Number(prompt("Digite o valor: "))
        vetor.push(v)
    }
    return vetor
}

function somarArray(vetor){
    let somatorio = 0
    for(let elementoAtual of vetor){
        somatorio = somatorio + elementoAtual
    }
    return somatorio
}

function imprimeTotal(t){
    alert(`O total da soma dos elemtnos do vetor é ${t}`)
}

const vetor = leValores()
let total = somarArray(vetor)
imprimeTotal(total)