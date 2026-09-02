function validarTriangulo(a, b, c) {

    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        return "Por favor, insira números válidos e maiores que zero.";
    }

    const isTriangulo = (a < b + c) && (b < a + c) && (c < a + b);

    if (!isTriangulo) {
        return "Os valores informados NÃO formam um triângulo.";
    }

    if (a === b && b === c) {
        return "Triângulo Equilátero (Todos os lados iguais)";
    }
    else if (a === b || a === c || b === c) {
        return "Triângulo Isósceles (Dois lados iguais)";
    }
    else {
        return "Triângulo Escaleno (Todos os lados diferentes)";
    }
}

function processar() {
    const a = parseFloat(document.getElementById('ladoA').value);
    const b = parseFloat(document.getElementById('ladoB').value);
    const c = parseFloat(document.getElementById('ladoC').value);

    const resultadoDiv = document.getElementById('resultado');
    const mensagem = validarTriangulo(a, b, c);

    resultadoDiv.innerText = mensagem;
}

console.log("Teste 10,10,10:", validarTriangulo(10, 10, 10));
console.log("Teste 10,10,15:", validarTriangulo(10, 10, 15));
console.log("Teste 10,20,30:", validarTriangulo(10, 20, 30));
console.log("Teste 3,4,5:", validarTriangulo(3, 4, 5));   