/*
Exercício 1: Converter Segundos em Horas, Minutos e Segundos
Enunciado:
 Desenvolva um programa que assuma uma entrada em segundos e a converta para horas, minutos e segundos.
Exemplo:
 Entrada: 3665 segundos
 Saída esperada: 1 hora, 1 minuto e 5 segundos.
 */

/*
const prompt = require("prompt-sync")();

let totalSegundos = Number(prompt("Introduz o número de segundos para o programa fazer a conversão para horas, minutos e segundos: "));

function converterSegundos(segundos) {
   let horas = Math.floor(segundos / 3600);
   let minutos = Math.floor((segundos % 3600) / 60);
   let segundosRestantes = segundos % 60;

   return { horas, minutos, segundosRestantes };
}

let conversao = converterSegundos(totalSegundos);

console.log(
   `${conversao.horas}hora(s) ${conversao.minutos}minuto(s) ${conversao.segundosRestantes}segundo(s)`
);
*/

/*
Exercício 2: Encontrar o Maior e o Menor Valor entre 3 Números
Enunciado:
 Desenvolva um programa que analise 3 valores inteiros e informe qual o maior e qual o menor deles.
Exemplo:
 Entrada: num1 = 5, num2 = 2, num3 = 8
 Saída esperada:
 Maior: 8
 Menor: 2
 */

/*
 const prompt = require("prompt-sync")();

let num1 = Number(prompt("Introduz o primeiro número: "));
let num2 = Number(prompt("Introduz o segundo número: "));
let num3 = Number(prompt("Introduz o terceiro número: "));


verificar(num1, num2, num3)

function verificar(num1, num2, num3) {
    let maior = num1;
    let menor = num1;

    if (num2 > maior) {
        maior = num2;
    }
    if (num3 > maior) {
        maior = num3;
    }
    if (num2 < menor){
        menor = num2;
    }
    if (num3 < menor){
        menor = num3;
    }
        console.log("O num " + maior + " é o maior e o num " + menor + " é o menor");
}*/

/*
Exercício 3: Mostrar Números em Ordem Crescente e Decrescente
Enunciado:
 Crie 2 variáveis (num1 e num2) e leia o valor para cada uma delas. Mostre os valores de forma crescente e decrescente.
Exemplo:
 Entrada: num1 = 7, num2 = 2
 Saída esperada:
 Crescente: 2, 7
 Decrescente: 7, 2
*/

/*
 const prompt = require("prompt-sync")();

let num1 = Number(prompt("Introduz o primeiro número: "));
let num2 = Number(prompt("Introduz o segundo número: "));

verificar(num1, num2)

function verificar(num1, num2){

    if(num1 > num2){
        console.log(`Crescente: ${num2}, ${num1}\nDecrescente: ${num1}, ${num2}`);
    }else{
        console.log(`Crescente: ${num1}, ${num2}\nDecrescente: ${num2}, ${num1}`);
    }
}
*/


/*
Exercício 4: Verificar se o Cheque Pode Ser Descontado
Enunciado:
 Desenvolva um Programa que leia o saldo inicial de um cliente de banco e leia também o valor de um cheque. Analise se o cheque pode ser descontado. Se o cheque não puder ser descontado, mostre essa informação, caso contrário, desconte o cheque e informe o saldo atualizado.
Exemplo:
 Entrada: Saldo = 500, Cheque = 300
 Saída esperada:
 Cheque descontado, saldo: 200
*/

/*
 const prompt = require("prompt-sync")();

let saldo = Number(prompt("Introduz o saldo do cliente: "));
let cheque = Number(prompt("Introduz o cheque a descontar ao cliente: "));

verificar(saldo, cheque)

function verificar(saldo, cheque){

    if(saldo > cheque){
        saldo= saldo - cheque
        console.log(`Cheque descontado. Saldo: ${saldo}`);
    }else{
        console.log(`O cheque não pode ser descontado`);
    }
}
*/

/*
Exercício 5: Ler 3 Valores e Exibir em Ordem Crescente e Decrescente
Enunciado:
 Ler 3 valores inteiros e apresentar os valores dispostos em ordem crescente e decrescente.
Exemplo:
 Entrada: num1 = 4, num2 = 9, num3 = 2
 Saída esperada:
 Crescente: 2, 4, 9
 Decrescente: 9, 4, 2
*/


/*
 const prompt = require("prompt-sync")();

let num1 = Number(prompt("Introduz o primeiro número: "));
let num2 = Number(prompt("Introduz o segundo número: "));
let num3 = Number(prompt("Introduz o terceiro número: "));

verificar(num1, num2, num3)

function verificar(num1, num2, num3){

    if(num1 > num2 && num1 > num3 && num2 > num3){
        console.log(`Crescente: ${num3}, ${num2}, ${num1}\nDecrescente: ${num1}, ${num2}, ${num3}`);
    }else if(num1 > num2 && num1 > num3 && num3 > num2){
        console.log(`Crescente: ${num2}, ${num3}, ${num1}\nDecrescente: ${num1}, ${num3}, ${num2}`);
    }else if(num2 > num1 && num2 > num3 && num1 > num3){
        console.log(`Crescente: ${num3}, ${num1}, ${num2}\nDecrescente: ${num2}, ${num1}, ${num3}`);
    }else if(num2 > num1 && num2 > num3 && num3 > num1){
        console.log(`Crescente: ${num1}, ${num3}, ${num2}\nDecrescente: ${num2}, ${num3}, ${num1}`);
    }else if(num3 > num1 && num3 > num2 && num1 > num2){
        console.log(`Crescente: ${num2}, ${num1}, ${num3}\nDecrescente: ${num3}, ${num1}, ${num2}`);
    }else{
        console.log(`Crescente: ${num1}, ${num2}, ${num3}\nDecrescente: ${num3}, ${num2}, ${num1}`);
    }
}
*/


/*
Exercício 6: Desconto de Compra
Enunciado:
 Uma loja oferece descontos de acordo com o valor da compra:
10% para compras até 200,00€.
15% para compras entre 200,01€ e 500,00€.
20% para compras acima de 500,00€.
 Desenvolva um Programa que leia o nome do cliente e o valor da compra e mostre o valor do desconto e o valor total a pagar.
Exemplo:
 Entrada: Cliente: João, Compra: 350
 Saída esperada:
 Nome: João
 Compra: 350,00€
 Desconto: 52,50€
 Total a pagar: 297,50€
*/

/*
const prompt = require("prompt-sync")();

let nome = prompt("Qual é o nome do cliente? ");
let valor = Number(prompt(`Qual é o valor da compra do ${nome}? `));

verificar(nome, valor)

function verificar(nome, valor) {
    let desconto;
    let valorComDesconto;
    /*
    10% para compras até 200,00€.
    15% para compras entre 200,01€ e 500,00€.
    20% para compras acima de 500,00€.
    
    if (valor <= 200){
        desconto = Math.ceil((valor * 10 / 100) * 100) / 100;
        valorComDesconto = valor - desconto
        console.log(`Nome: ${nome}\nCompra: ${valor}€\nDesconto: ${desconto}€\nTotal a pagar: ${valorComDesconto}€`);
    }else if (valor >= 200.01 && valor <= 500){
        desconto = Math.ceil((valor * 15 / 100) * 100) / 100;
        valorComDesconto = valor - desconto
        console.log(`Nome: ${nome}\nCompra: ${valor}€\nDesconto: ${desconto}€\nTotal a pagar: ${valorComDesconto}€`);
    }else{
        desconto = Math.ceil((valor * 20 / 100) * 100) / 100;
        valorComDesconto = valor - desconto
        console.log(`Nome: ${nome}\nCompra: ${valor}€\nDesconto: ${desconto}€\nTotal a pagar: ${valorComDesconto}€`);
    }

}
*/

/*
Exercício 7: Calcular a Média de Notas com Pesos
Enunciado:
 O sistema de avaliação de uma disciplina tem três provas com pesos diferentes. 
 A primeira tem peso 2, a segunda tem peso 3, e a terceira tem peso 5. 
 Crie um programa para calcular a média final de um aluno e mostrar se ele está APROVADO (nota >= 6) ou REPROVADO (nota < 6).
Exemplo:
 Entrada: Nota1 = 7, Nota2 = 6, Nota3 = 9
 Saída esperada:
 Média: 7.4
 Aprovado
*/



