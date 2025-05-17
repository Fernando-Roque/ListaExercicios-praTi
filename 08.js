//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente.

console.log("Digite 2 valores diferentes! ")
const prompt = require("prompt-sync")()

const valor1 = parseFloat(prompt("Digite o valor 1: "))

const valor2 = parseFloat(prompt("Digite o valor 2: "))

if (valor1 < valor2) {
    console.log(valor1 + " , " + valor2)
}else{
    console.log(valor2 + " , " + valor1)
}