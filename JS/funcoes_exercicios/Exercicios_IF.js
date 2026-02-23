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
}

