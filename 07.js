//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")()

let num = Number(prompt(console.log("Insira o numero de Maçãs que deseja comprar ! ")))
result = 0
if (num < 12) {
    result = num * 0.3
} else {
result = num *0.25
}

console.log( "O Valor a ser pago é "+ result + " Reais!")