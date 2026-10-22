/* Eu achei a questão média. Eu tive dúvida com parâmetros e sintáxe.
A entrada foi: Usuário e senha.
O processamento foi: A validação da senha, e a autenticação do usuário
A saída: A frase, se o acesso foi concedido ou não
Eu pensei em: primeiro pedir o usuário e senha, depois usar o if else pra validar a senha, e por fim fazer a função autenticarUsuario, pra sair a frase.*/

function validarSenha(senha) {
    if (senha.length >= 6) { 
        return true; 
    } else { 
        return false; 
    } 
}

function autenticarUsuario(usuario, senha) { 
    if (validarSenha(senha)) { 
        return alert(`Acesso concedido para ${usuario}`) 
    } else { 
        return alert(`Senha muito curta para o usuário ${usuario}`)
        } 
}

function receberUsuarioSenha() {
    let usuario = prompt("Qual o usuário atual? ");
    let senha = prompt("Qual a sua senha? (Deve conter mínimo de 6 algarismos");
    validarSenha(senha)
    autenticarUsuario(usuario, senha)
}

receberUsuarioSenha()