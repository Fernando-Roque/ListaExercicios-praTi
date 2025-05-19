//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
//fibonacci utilizando um loop for
//F(0) = 0
//F(1) = 1
//F(n) = F(n-1) + F(n-2) para n > 1
const prompt = require("prompt-sync")()

let num = parseFloat(prompt("Digite o Número para saber o Fatorial. "))

let vetorresp = [] , cont = 0
//console.log(fibonacci(num)) // chama a função fibonacci


function fibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return  fibonacci(num-1) + fibonacci(num -2)
}

for (let i = 0; i < num; i++) {
   vetorresp[i] = fibonacci(i)
}

for (let i = 0; i < num; i++) {
   console.log(vetorresp[i])
}