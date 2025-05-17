//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
//Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require("prompt-sync")()

let valor1 = Number(prompt("insira o primeiro numero ! : "))

let valor2 = Number(prompt("insira o segundo numero ! : "))

let chave = prompt("insira a operação dejada +,-,/ e * : ")
 let resul = 0
switch (chave) {
       case "+" :
        resul =  valor1 + valor2
        console.log("A soma é: " + resul)
        break;
    case "-" :
        result = valor1 - valor2
        console.log("A subtração é: "+ result)
        break
    case "/":
        if (valor2 != 0) {
            console.log("A divisão é: " + valor1 / valor2)
        }else{
            console.log("O segundo numero deve ser diferente de 0 !")
        } 
        break
        case "*":
            console.log("A multiplicação é: " + valor1 * valor2)  
        break
    default:
        console.log("operação inexistente!")
        break;
}