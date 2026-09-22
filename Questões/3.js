/*Pensamento Lógico: Eu fiz duas functions, uma que recebe o valor em celcius e outra para calcular o valor para fahrenheit. 
A entrada numa function, onde eu recebo o valor do C, o processamento em outra function, para calcular o valor em fahrenheit, e a saída junto ao processamento, com o alert mostrando o resultado.
Eu achei a questão fácil, não tive nenhuma dúvida nessa
*/
function celsiusParaFahrenheit(){
    let C = Number(prompt("Digite o valor da temperatura em °C: "));
    calcCparaF(C);
}

function calcCparaF(C){
    let F = (C * 1.8) + 32;
    alert(`A temperatura ${C} °C em Fahrenheit é: ${F}`);
}

celsiusParaFahrenheit()