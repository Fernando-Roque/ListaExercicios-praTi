//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
//utilizando um loop for ou while

const prompt = require("prompt-sync")()

let num = parseFloat(prompt("Digite o Número para saber o Fatorial. "))

console.log(fatorial(num)) // chama a função fatorial 

function fatorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * fatorial(num - 1);
}

