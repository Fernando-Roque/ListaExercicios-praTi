//9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
//utilizando um loop for.

const vetor = [1,2,3,4,5,6,7,8,9,10]
let resultado = [];

for (let index = vetor.length-1 ; index >= 0 ; index--) {
    resultado= vetor[index];// 
}
console.log(vetor.join(', '));//delimitador (opcional): String que separa os elementos.
                              //Valor padrão: "," (vírgula) se omitido.


