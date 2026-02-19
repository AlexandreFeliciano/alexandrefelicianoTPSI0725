//IF

if(valor1==valor2){
    console.log("os valores sao iguais");
}
if(valor!=valor2){
    console.log("os valores sao diferentes");
}else{
    console.log("nao sabemos");
}


// Sequências de avaliação, avaliam só se o if anterior for false
if (valor1 > valor2) {
    console.log("o valor1 maior que valor2");
} else if (valor1 < valor2) {
    console.log("o valor1 menor que valor2");
} else {
    console.log("os valores sao iguais");
}


// switch
let op = 3;

switch (op) {
    case 1:
        console.log("press 1");
        break;
    case 2:
        console.log("press 2");
        break;
    default:
        console.log("Opção inválida"); 
}