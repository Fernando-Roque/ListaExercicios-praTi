//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//controle if-else.

const prompt = require("prompt-sync")()

let idade = Number(prompt("Insira sua idade para saber a classificação! Criança,Adolecente, Adulto ou Idoso :"))

//f (idade <= 11) {
//    console.log(idade + " Sua Idade esta na categoria Criança")
//} else if (idade >= 12 && idade <= 18) {
//    console.log(idade + " Sua Idade esta na categoria Adolecente")
//}else if (idade >= 18 && idade <= 64) {
//    console.log(idade + " Sua Idade esta na categoria Adulto")
//}else{
//    console.log(idade + " Sua Idade esta na categoria Idoso")
//}

idade <= 11 ? console.log(idade + " Sua Idade esta na categoria Criança"): idade >= 12 && idade <= 18 ?
console.log(idade + " Sua Idade esta na categoria Adolecente") : idade >= 18 && idade <= 64 ?
console.log(idade + " Sua Idade esta na categoria Adulto") :  console.log(idade + " Sua Idade esta na categoria Idoso")