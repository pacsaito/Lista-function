function executarMenu() {
     let i = 0
    do {
      
      let opcao = prompt("Digite a letra corespondente a conversão desejada:\n a. Converter de real para euro \n b. Converter de euro para real \n c. Converter de real para dólar \n d. Converter de dólar para real \n e. Fechar o programa. ")
      let formula = 0
      let valor = 0
      let result = 0
      switch(opcao) {
         case "a":
         formula = 0.17
          valor = receberValor()
          result = conversor(valor, formula)
         mostraConversao(resultado)
         break;

         case "b":
         formula = 5.87
          valor = receberValor()
          result = conversor(valor, formula)
         mostraConversao(resultado)
         break;

        case "c":
        formula = 0.19
          valor = receberValor()
          result = conversor(valor, formula)
         mostraConversao(resultado)
         break;

         case "d":
        formula = 5.22
         valor = receberValor()
         result = conversor(valor, formula)
         mostraConversao(resultado)
         break;

         case "e":
         i = 1
         alert("PROGRAMA ENCERRADO")
         break;
      }
    }while(i == 0)
}
function receberValor() {
   let moeda = Number(prompt("Digite o valor a ser convertido"))
   return moeda
}
function conversor(valor, formula) {
    let valorfinal = valor * formula
    return valorfinal
}
function mostraConversao(result) {
    alert(`O valor convertido é ${result}`)
}
executarMenu()