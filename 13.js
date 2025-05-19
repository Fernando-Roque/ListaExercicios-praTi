//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
//a média aritmética desses números.

const prompt = require("prompt-sync")()
console.log("Digite a sequencia de Números que quer a media. ")
// Número a receber. 
let valor = 0 

let somador = 0.0 // variavel contador
let contador = 0 // variavel de soma 

do {
    // add o valor ao final do vetor
    valor = parseFloat(prompt("Insira o numero,para indicar o fim da sequencia digite 0! "))
    if (valor != 0) {
        somador += valor
        contador++ 
    }   
} while (valor != 0);



console.log("A média aritmética é : " + (somador/contador))