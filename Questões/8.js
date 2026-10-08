function receberSenha(){
    let senha = prompt("Qual a sua senha? (tenha pelo menos 6 caracteres");
    return senha;
}

function autenticarUsuario(senha){
    let usuario = prompt("Qual o usuário: ");
    receberSenha()
    validarSenha(senha)
    if(senha = true){
        alert(`Acesso concedido para ${usuario}`);
    } else {
        alert(`Senha muito curta para o usuário ${usuario}`)
    }
}

function validarSenha(senha){
    if(senha.length >= 6){
        return true;
    } else{
        return false;
    }
}

autenticarUsuario()