//5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
//determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
//utilizando if-else.

const prompt = require("prompt-sync")()

let altura = Number(prompt("insira sua Altura ! : "))

let peso = Number(prompt("insira o seu peso ! : "))

const imc = peso/ (altura**2)

if (imc < 18.5) {
    console.log("Seu IMC é :  "+ imc + " considerado magreza.")
} else if (imc >= 18 && imc <=25) {
    console.log("Seu IMC é :  "+ imc + " considerado Peso normal.")
} else if (imc >= 25 && imc <=30) {
    console.log("Seu IMC é :  "+ imc + " considerado Sobrepeso.")
}else if (imc >= 30 && imc <=35) {
    console.log("Seu IMC é :  "+ imc + " considerado Obesidade Grau I.")
}else if (imc >= 35 && imc <=40) {
    console.log("Seu IMC é :  "+ imc + " considerado Obesidade Grau II.")
}else{
    console.log("Seu IMC é :  "+ imc + " considerado Obesidade Grau III.")
}