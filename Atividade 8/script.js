function calcularValores(num1, num2, num3) {
  let soma = num1 + num2 + num3;
  let quadPrimeiro = num1 * num1;
  let quadSegundo = num2 * num2;

  return `A soma dos três números é: ${soma}, o quadrado do primeiro é: ${quadPrimeiro} e o quadrado do segundo é: ${quadSegundo}`;
}

function exercicio1_resolve(arrayDeNumeros) {
  return calcularValores.apply(null, arrayDeNumeros);
}

function executarEx1() {
  let input = document.getElementById('inputEx1').value;
  let numeros = input.split(',').map(num => Number(num.trim()));

  if (numeros.length !== 3 || numeros.includes(NaN)) {
    document.getElementById('resultadoEx1').innerHTML = "<em>Por favor, digite exatamente 3 números válidos separados por vírgula.</em>";
    return;
  }

  let resultadoFinal = exercicio1_resolve(numeros);
  document.getElementById('resultadoEx1').innerText = resultadoFinal;
}


function exercicio2_resolve(arrayDeLetras) {
  let palavrasDistintas = [];
  let limiteTentativas = 0;

  while (palavrasDistintas.length < 10 && limiteTentativas < 1000) {
    let letrasEmbaralhadas = [...arrayDeLetras].sort(() => Math.random() - 0.5);
    let novaPalavra = letrasEmbaralhadas.join('');

    if (!palavrasDistintas.includes(novaPalavra)) {
      palavrasDistintas.push(novaPalavra);
    }
    limiteTentativas++;
  }

  let resultadoFinal = [];

  Array.prototype.push.apply(resultadoFinal, palavrasDistintas);

  return resultadoFinal;
}

function executarEx2() {
  let input = document.getElementById('inputEx2').value;
  let letras = input.split(',').map(letra => letra.trim().toUpperCase());

  letras = letras.filter(l => l !== "");

  if (letras.length !== 5) {
    document.getElementById('resultadoEx2').innerHTML = "<em>Por favor, digite exatamente 5 letras separadas por vírgula.</em>";
    return;
  }

  let listaPalavras = exercicio2_resolve(letras);

  let textoResultado = "<strong>Array resultante:</strong><br>";
  listaPalavras.forEach((palavra, index) => {
    textoResultado += `${index + 1}. ${palavra}<br>`;
  });

  document.getElementById('resultadoEx2').innerHTML = textoResultado;
}