const opcoes = ['pedra', 'papel', 'tesoura'];

const emojis = {
    pedra: '🗿',
    papel: '📄',
    tesoura: '✂️'
};

let placarJogador = 0;
let placarComputador = 0;
let jogando = false;

const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const resultadoTexto = document.getElementById('resultado-texto');
const computadorEscolha = document.getElementById('computador-escolha');
const contagemEl = document.getElementById('contagem');
const botoes = document.querySelectorAll('.escolhas button');

function desabilitarBotoes(desabilitar) {
    botoes.forEach(b => b.disabled = desabilitar);
}

function mostrarResultado(jogador, computador) {
    computadorEscolha.textContent = 'Computador escolheu: ' + emojis[computador] + ' ' + computador;

    if (jogador === computador) {
        resultadoTexto.textContent = '🤝 Empate!';
    } else if (
        (jogador === 'pedra' && computador === 'tesoura') ||
        (jogador === 'papel' && computador === 'pedra') ||
        (jogador === 'tesoura' && computador === 'papel')
    ) {
        resultadoTexto.textContent = '🎉 Você ganhou!';
        placarJogador++;
        playerScoreEl.textContent = placarJogador;
    } else {
        resultadoTexto.textContent = '😢 Computador ganhou!';
        placarComputador++;
        computerScoreEl.textContent = placarComputador;
    }
}

function iniciarContagem(jogador) {
    if (jogando) return;
    jogando = true;
    desabilitarBotoes(true);

    resultadoTexto.textContent = 'Você escolheu: ' + emojis[jogador] + ' ' + jogador;
    computadorEscolha.textContent = '';

    const computador = opcoes[Math.floor(Math.random() * 3)];
    const passos = ['3...', '2...', '1...', '🎲'];

    let i = 0;
    contagemEl.textContent = passos[i];

    const intervalo = setInterval(function () {
        i++;
        if (i < passos.length) {
            contagemEl.textContent = passos[i];
        } else {
            clearInterval(intervalo);
            contagemEl.textContent = '';
            mostrarResultado(jogador, computador);
            desabilitarBotoes(false);
            jogando = false;
        }
    }, 700);
}

botoes.forEach(botao => {
    botao.addEventListener('click', function () {
        iniciarContagem(this.getAttribute('data-choice'));
    });
});

document.getElementById('resetar').addEventListener('click', function () {
    if (jogando) return;
    placarJogador = 0;
    placarComputador = 0;
    playerScoreEl.textContent = '0';
    computerScoreEl.textContent = '0';
    resultadoTexto.textContent = 'Escolha uma opção acima!';
    computadorEscolha.textContent = '';
    contagemEl.textContent = '';
});