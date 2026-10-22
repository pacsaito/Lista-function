/*Pensamento Lógico: Eu fiz uma function só, com a entrada, o processamento e a saída juntos. Posso trocar se pedir.
Eu achei a questão fácil, as dúvidas da questão passada me ajudaram bastante a fazer essa. Fiquei com uma dúvida só.
A dúvida foi o '%', por que eu não entendi muito bem como funciona desde o C++, então eu fiz errado de primeira. Mas eu troquei as frases dos alerts e deu certo.*/

function ehPar(){
    let n = Number(prompt("Digite o número à ser verificado: "));
    if(n % 2){
        alert(`O número ${n} é ímpar.`)
    } else {
        alert(`O número ${n} é par.`)
    }
}
ehPar()