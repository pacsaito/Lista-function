/* Eu achei a questão média. Como teve o mesmo raciocínio do último, não tive tantas dúvidas assim
A entrada foi: Array de objetos em que cada um tem um título, minutos e segundos.
O processamento foi: Calcular o tempo em segundos de cada musica e retornar o valor.
A saída: O tempo em segundos
Eu pensei em: primeiro receber o objeto, depois calcular os segundos, e depois usar um alert pra mostrar na tela o valor total.*/

function recebePlaylist(){
    const playlist = []
    let tamanho = Number(prompt("Digite o numero de musicas da playlist"))
    for(let i = 0; i < tamanho; i++){
        const musica = {
            titulo: prompt(`Digite o título da ${i+1}º musica`),
            minutos: Number(prompt(`Digite quantos minutos tem a musica`)),
            segundos: Number(prompt(`Digite quantos segundos tem a musica`)),
        }
        playlist.push(musica)
    }
    return playlist
 }
 function calcularTempoPlaylist(playlist){
    let soma = 0
    for(let musica of playlist){
        let segundos = converterParaSegundos(musica.minutos, musica.segundos)
        soma += segundos
    }
    return soma
 }
 function converterParaSegundos(minutos, segundos){
      let totalSegundos = (minutos*60) + segundos
      return totalSegundos 
 }
 function mostraSegundos(tempo){
    alert(`Sua playlist tem ${tempo} segundos`)
 }
 let lista = recebePlaylist()
 let minutagem = calcularTempoPlaylist(lista)
 mostraSegundos(minutagem)