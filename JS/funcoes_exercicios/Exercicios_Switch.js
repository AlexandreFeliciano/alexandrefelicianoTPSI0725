/*
1. Tipo de dia
Cria um programa que receba o nome de um dia da semana e diga se é dia útil ou fim de semana.
Exemplo:
Entrada → domingo
Saída → Fim de semana
*/

/*
const prompt = require("prompt-sync")();

let dia;

dia = prompt("Digite o nome de um dia da semana: ");

function verificarDia(dia) {

    if (dia === "segunda-feira" || dia === "terça-feira" || dia === "quarta-feira" || dia === "quinta-feira" || dia === "sexta-feira") {
        console.log(`A ${dia} é um dia útil`)
    } else {
        console.log(`O ${dia} é um dia de fim de semana`)
    }
}

verificarDia(dia);
*/

/*
2. Classificação de nota
Lê uma nota (0–100) e retorna uma classificação:
•	90 ou mais → Excelente
•	70–89 → Bom
•	50–69 → Suficiente
•	Abaixo de 50 → Insuficiente
Exemplo:
Entrada → Bom
Saída →  70-89
*/

/*
const prompt = require("prompt-sync")();

let nota = Number(prompt("Digite uma nota de 0 a 100 para saber a sua classificação: "));

function classificarNota(nota) {
    if (nota >= 0 && nota < 50) {
        return "Insuficiente";
    } else if (nota >= 50 && nota < 65) {
        return "Suficiente";
    } else if (nota >= 65 && nota < 80) {
        return "Bom";
    } else if (nota >= 80 && nota <= 100) {
        return "Muito Bom";
    } else {
        return "Nota inválida!";
    }
}

let resultado = classificarNota(nota);

console.log(resultado);
*/