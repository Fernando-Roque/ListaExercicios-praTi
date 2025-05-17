//11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
//utilizando um loop for.


const prompt = require("prompt-sync")()
console.log("digite 5 números para obter a soma ")
let valor1 = 0,somador = 0

for(let i = 0; i < 5; i++ ){
    somador += parseInt(prompt("Digite o número! "))
}

console.log("A soma é :" + somador )