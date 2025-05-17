//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.


const prompt = require("prompt-sync")()

let valor1 = parseInt(prompt("Digite um número! "))

for (let index = 0; index < 10 ; index++) {
    console.log(valor1)
}