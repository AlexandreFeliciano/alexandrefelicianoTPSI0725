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

/*
const prompt = require("prompt-sync")();

let nota1 = Number(prompt("Introduza a primeira nota: "));
let nota2 = Number(prompt("Introduza a segunda nota: "));
let nota3 = Number(prompt("Introduza a terceira nota: "));
let media

verificar(nota1, nota2, nota3);

function verificar(nota1, nota2, nota3) {

    const peso1 = 2;
    const peso2 = 3;
    const peso3 = 5;

    media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

    console.log("Média: " + media);

    if (media >= 6) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}
*/

/*
Exercício 8: Calcular a Média de 10 Notas e informar notas iguais ou acima da media 
Enunciado:
Crie um programa que leia a nota de 10 alunos (notas de 0 a 20), calcule a média das notas e mostre a média. 
Além disso, informe quantos alunos ficaram com a nota igual ou acima da média. 
*/

/*
const prompt = require("prompt-sync")();

let aluno1 = "Alex";
let aluno2 = "Bruno";
let aluno3 = "Dabid";
let aluno4 = "Costa";
let aluno5 = "Sérgio";
let aluno6 = "Rui";
let aluno7 = "Luís";
let aluno8 = "Andreia";
let aluno9 = "Nelson";
let aluno10 = "Fonseca";


let nota1 = Number(prompt(`Qual é a nota do ${aluno1}: `));
let nota2 = Number(prompt(`Qual é a nota do ${aluno2}: `));
let nota3 = Number(prompt(`Qual é a nota do ${aluno3}: `));
let nota4 = Number(prompt(`Qual é a nota do ${aluno4}: `));
let nota5 = Number(prompt(`Qual é a nota do ${aluno5}: `));
let nota6 = Number(prompt(`Qual é a nota do ${aluno6}: `));
let nota7 = Number(prompt(`Qual é a nota do ${aluno7}: `));
let nota8 = Number(prompt(`Qual é a nota da ${aluno8}: `));
let nota9 = Number(prompt(`Qual é a nota do ${aluno9}: `));
let nota10 = Number(prompt(`Qual é a nota do ${aluno10}: `));

function media(nota1,nota2,nota3,nota4,nota5,nota6,nota7,nota8,nota9,nota10){
    return (nota1+nota2+nota3+nota4+nota5+nota6+nota7+nota8+nota9+nota10)/10;
}

function igualOuAcima(media,nota1,nota2,nota3,nota4,nota5,nota6,nota7,nota8,nota9,nota10){

    let contador = 0;

    if(nota1 >= media) contador++;
    if(nota2 >= media) contador++;
    if(nota3 >= media) contador++;
    if(nota4 >= media) contador++;
    if(nota5 >= media) contador++;
    if(nota6 >= media) contador++;
    if(nota7 >= media) contador++;
    if(nota8 >= media) contador++;
    if(nota9 >= media) contador++;
    if(nota10 >= media) contador++;

    return contador;
}

let mediaTurma = media(nota1,nota2,nota3,nota4,nota5,nota6,nota7,nota8,nota9,nota10);
let resultado = igualOuAcima(mediaTurma,nota1,nota2,nota3,nota4,nota5,nota6,nota7,nota8,nota9,nota10);

console.log("A média da turma é: " + mediaTurma);
console.log("Alunos com nota igual ou acima da média: " + resultado);
*/

/*
Exercício Switch: Exibir Nome do Mês
Enunciado:
Leia um número inteiro de 1 a 12 e mostre o nome do mês correspondente. Caso o número não seja válido, mostre uma mensagem de erro.
Exemplo:
Entrada: 5
Saída esperada: Maio
*/

/*
const prompt = require("prompt-sync")();

let num = Number(prompt("Introduza um num de 1 a 12 para o programa mostrar o mes correspondente: "));

switch (num) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Erro! O número tem que ser entre 1 e 12.");
}
*/

/*
Exercício Loop: Identificar Números Pares e Ímpares
Enunciado:
 Leia 10 números e determine quantos são pares e quantos são ímpares.
Exemplo:
 Entrada: 2, 3, 5, 6, 8, 9, 10, 12, 14, 15
 Saída esperada:
 Pares: 6
 Ímpares: 4
*/

/*
const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Digite o 1º número: "));
let numero2 = Number(prompt("Digite o 2º número: "));
let numero3 = Number(prompt("Digite o 3º número: "));
let numero4 = Number(prompt("Digite o 4º número: "));
let numero5 = Number(prompt("Digite o 5º número: "));
let numero6 = Number(prompt("Digite o 6º número: "));
let numero7 = Number(prompt("Digite o 7º número: "));
let numero8 = Number(prompt("Digite o 8º número: "));
let numero9 = Number(prompt("Digite o 9º número: "));
let numero10 = Number(prompt("Digite o 10º número: "));

function contarPares(numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8, numero9, numero10) {
    
    let pares = 0;
    
    if (numero1 % 2 === 0) pares++;
    if (numero2 % 2 === 0) pares++;
    if (numero3 % 2 === 0) pares++;
    if (numero4 % 2 === 0) pares++;
    if (numero5 % 2 === 0) pares++;
    if (numero6 % 2 === 0) pares++;
    if (numero7 % 2 === 0) pares++;
    if (numero8 % 2 === 0) pares++;
    if (numero9 % 2 === 0) pares++;
    if (numero10 % 2 === 0) pares++;
    
    return pares;
}

function contarImpares(numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8, numero9, numero10) {

    let impares = 0;
    
    if (numero1 % 2 !== 0) impares++;
    if (numero2 % 2 !== 0) impares++;
    if (numero3 % 2 !== 0) impares++;
    if (numero4 % 2 !== 0) impares++;
    if (numero5 % 2 !== 0) impares++;
    if (numero6 % 2 !== 0) impares++;
    if (numero7 % 2 !== 0) impares++;
    if (numero8 % 2 !== 0) impares++;
    if (numero9 % 2 !== 0) impares++;
    if (numero10 % 2 !== 0) impares++;
    
    return impares;
}

let totalPares = contarPares(numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8, numero9, numero10);

let totalImpares = contarImpares(numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8, numero9, numero10);

console.log(`Pares: ${totalPares}`);
console.log(`Ímpares: ${totalImpares}`);
*/

