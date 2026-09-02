let iniciar = confirm("Vamos calcular a média do aluno!");

if (iniciar) {
    let nome = prompt("Digite o nome do aluno:");

    let nota1 = parseFloat(prompt("Digite a 1ª nota de " + nome + ":"));
    let nota2 = parseFloat(prompt("Digite a 2ª nota de " + nome + ":"));
    let nota3 = parseFloat(prompt("Digite a 3ª nota de " + nome + ":"));
    let nota4 = parseFloat(prompt("Digite a 4ª nota de " + nome + ":"));

    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    alert("Aluno: " + nome + "\nMédia Final: " + media.toFixed(2));
} else {
    alert("Cálculo cancelado.");
}