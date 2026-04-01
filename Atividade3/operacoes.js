alert("Bem-vindo à calculadora da Jujuba!");

let num1 = parseFloat(prompt("Digite o PRIMEIRO número:"));
let num2 = parseFloat(prompt("Digite o SEGUNDO número:"));

let soma = num1 + num2;
let subtracao = num1 - num2;
let produto = num1 * num2;
let divisao = num1 / num2;
let resto = num1 % num2;

let mensagem = "Resultados das operações com os números " + num1 + " e " + num2 + ":\n\n" +
               "Soma: " + soma + "\n" +
               "Subtração (1º - 2º): " + subtracao + "\n" +
               "Produto: " + produto + "\n" +
               "Divisão (1º / 2º): " + divisao + "\n" +
               "Resto da divisão: " + resto;
alert(mensagem);