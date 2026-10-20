/* Eu achei a questão média. Eu tive dúvida com array e objeto.
A entrada foi: Nome do aluno e notas.
O processamento foi: a média e a avaliação do aluno.
A saída: A frase falando se o aluno foi aprovado ou não.
Eu pensei em: primeiro pedir o nome do aluno com as notas, depois fazer a média das notas, avaliar se o aluno foi aprovado ou não, e por fim sair a frase completa.*/

function calcularMediaArray(notas) { 
    let soma = 0; 
    for (let nota of notas) { 
        soma = soma + nota; 
    } 
    let media = soma / notas.length; 
    return media; 
}

function avaliarAluno(aluno) { 
    let media = calcularMediaArray(aluno.notas); 
    if (media >= 60) { 
        return "Aprovado"; 
    } else { 
        return "Reprovado"; 
    } 
}

function cadastrarAluno() { 
    let nome = prompt("Qual o nome do aluno?: "); 
    let nota1 = Number(prompt(`Digite a 1ª nota do aluno ${nome}:`)); 
    let nota2 = Number(prompt(`Digite a 2ª nota do aluno ${nome}:`)); 
    let nota3 = Number(prompt(`Digite a 3ª nota do aluno ${nome}:`));
    
    const aluno = { 
        nome: nome, 
        notas: [nota1, nota2, nota3]
    } 
    let resultado = avaliarAluno(aluno); 
    alert(`O aluno ${aluno.nome} está: ${resultado}`); }

cadastrarAluno()