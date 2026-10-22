/* Eu achei a questão difícil. Eu tive dúvida com for-of e array de objetos.
A entrada foi: os nomes e as notas.
O processamento foi: a verificação de aprovação e a conta de aprovados.
A saída: o total de alunos aprovados.
Eu pensei em: primeiro receber, depois verificar; se aprovado, adcionar na conta dos alunos, e depois usar um alert pra mostrar na tela.*/

function verificarAprovacao(nota) {
    if(nota >= 60) {
        return true;
    } else {
        return false;
    }
}

function contarAprovados(listaAlunos) {
    let total = 0;
    for (let aluno of listaAlunos) {
        if (verificarAprovacao(aluno.nota)) { 
            total++; 
        } 
    } 
    return total; 
}

function executarAnalise() { 
    let turma = []; 
    for (let i = 0; i < 4; i++) { 
        let nome = prompt(`Digite o nome do ${i + 1}º aluno:`);
        let nota = Number(prompt(`Digite a nota de ${nome}:`));

        let aluno = {
            nome: nome,
            nota: nota
        }
        turma.push(aluno);

        }
    let totalAprovados = contarAprovados(turma); 
    alert(`Total de alunos aprovados: ${totalAprovados}`);

}
    
executarAnalise();