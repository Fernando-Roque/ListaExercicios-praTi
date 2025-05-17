//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
//formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//Isósceles, escaleno ou eqüilátero.
//Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
//Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
//Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C e A<> C)
//Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require("prompt-sync")()

console.log("Insira os valores para ver se formam um triangulo! ")

let A = Number(prompt("insira o valor do lado A : "))

let B = Number(prompt("iinsira o valor do lado B : "))

let C = Number(prompt("iinsira o valor do lado B : "))

let resul = ""
if (A < B+C && B < A+C && C < A+B) {
    resul += "É um triangulo"
}
if (A == B && B == C) {
    resul += " eqüilátero" 
} else if (A != B && B != C && A !=C) {
    resul += " escaleno!"
}else if (A == B || A == C || B == C) {
    resul += " isósceles!"
}

console.log(resul)