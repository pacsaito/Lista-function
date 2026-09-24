/* Eu achei a questão média. Eu tive bastante dúvida com os escopos, e com os paramentros das funções. 
A entrada foi: o peso e a altura.
O processamento foi: a equação do IMC.
A saída: usei um if else para a frase.
Eu pensei em: primeiro, receber a altura e o peso, depois calcular e usar o if else pra sair a frase. */
function receberIMC() {
    let peso = Number(prompt("Digite o seu peso (em kg): "))
    let altura = Number(prompt("Digite sua altura (em metros): "))
    calcularIMC(peso, altura)
}

function calcularIMC(peso, altura) {
    let IMC = peso / (altura * altura)
    sairIMC(IMC)

}

function sairIMC(IMC) {
    if (IMC < 18.5) {
        console.log("Abaixo do peso")
    } else {
        if (IMC >= 18.5 && IMC < 24.9) {
            console.log("Peso normal")
        } else {
            console.log("Sobrepeso")
        }
    }
}

receberIMC()