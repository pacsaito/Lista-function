/*Pensamento Lógico: Eu pensei em abrir duas funções: uma que recebe os valores e outra que calcula os valores. 
As entradas numa function e o processamento junto da saída. 
Eu achei a questão fácil, mas fiquei com dúvida em duas coisas que me prenderam bastante, então acho que essa (por ser a primeira questão) será média. 
As dúvidas foram a forma de mostrar a variável no alert (ou console) e um erro por que meu resultado estava dando NaN como resposta, e o professor me ajudou a resolver.*/

function receberBaseAltura(){
    let b = Number(prompt("Digite o valor da base do triângulo: "));
    let h = Number(prompt("Digite o valor da altura do triângulo: "));
    calcularAreaRetangulo(b, h)
}

function calcularAreaRetangulo(b, h){
    let area = (b * h)/2;
    alert(`A area do triangulo é ${area} metros`);
}
    receberBaseAltura()