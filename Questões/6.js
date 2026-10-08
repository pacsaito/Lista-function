/* Eu achei a questão média. Eu tive dúvida com o objeto, principalmente em definir os valores.
A entrada foi: a pessoa
A saída: a frase
Eu pensei em: receber os valores das pessoas, e fazer outra function pra sair a frase. */

function formatarPessoa() {
    const pessoa = {
    nome: prompt("Qual o seu nome: "),
    idade: Number(prompt("Qual a sua idade: ")),
    prof: prompt("Qual a sua profissão: ")
}
    sairPessoa(pessoa)
}


function sairPessoa(pessoa) {
    alert(`Olá, meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e trabalho como ${pessoa.prof}.`);
}

formatarPessoa()

