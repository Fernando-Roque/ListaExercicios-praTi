//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
//"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if

const prompt = require("prompt-sync")()

let nota = Number(prompt("Digite sua nota para saber se voçe foi Aprovado, Reprovado ou está de Recuperação! :"))


//if (nota < 5 ) {
//    console.log(nota + " Voçe esta de reprovado!")
//} else if (nota >= 5 && nota <= 6) {
//    console.log(nota + " Voçe esta de recuperação!")
//} else if (nota >= 7 && nota <= 10) {
//    console.log(nota + " Voçe esta de Aprovado!")
//}

nota < 5 ? console.log(nota + " Voçe esta de reprovado!") :  nota >= 5 && nota <= 6 ?
console.log(nota + " Voçe esta de recuperação!") : console.log(nota + " Voçe esta de Aprovado!")