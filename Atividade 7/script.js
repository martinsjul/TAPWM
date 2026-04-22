function maiorDeTres(a, b, c) {
  return Math.max(a, b, c);
}

function ordenarCrescente(a, b, c) {
  return [a, b, c].sort((x, y) => x - y);
}

function ehPalindromo(str) {
  const limpa = str.toLowerCase().replace(/\s+/g, '');
  const invertida = limpa.split('').reverse().join('');
  return limpa === invertida;
}

function verificarSubconjunto(palavra1, palavra2) {
  if (!palavra1 || !palavra2 || palavra1 === undefined || palavra2 === undefined) {
    return 'erro';
  }
  if (palavra1.trim() === '' || palavra2.trim() === '') {
    return 'erro';
  }
  return palavra1.toLowerCase().includes(palavra2.toLowerCase())
    ? 'é um subconjunto'
    : 'não é um subconjunto';
}

function diaDaSemana(dataStr) {
  const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  const [ano, mes, dia] = dataStr.split('-').map(Number);
  const data = new Date(ano, mes - 1, dia);
  return dias[data.getDay()];
}


function setResult(id, texto) {
  const el = document.getElementById(id);
  el.textContent = texto;
  el.classList.remove('empty');
}

function fn1() {
  const vals = ['n1a', 'n1b', 'n1c'].map(id => parseFloat(document.getElementById(id).value));
  if (vals.some(isNaN)) return setResult('r1', 'Preencha os três campos.');
  setResult('r1', `Maior: ${maiorDeTres(...vals)}`);
}

function fn2() {
  const vals = ['n2a', 'n2b', 'n2c'].map(id => parseFloat(document.getElementById(id).value));
  if (vals.some(isNaN)) return setResult('r2', 'Preencha os três campos.');
  setResult('r2', `Ordenados: ${ordenarCrescente(...vals).join(' < ')}`);
}

function fn3() {
  const str = document.getElementById('s3').value.trim();
  if (!str) return setResult('r3', 'Digite uma palavra ou frase.');
  const resp = ehPalindromo(str) ? '✔ É palíndromo' : '✘ Não é palíndromo';
  setResult('r3', resp);
}

function fn4() {
  const p1 = document.getElementById('p4a').value;
  const p2 = document.getElementById('p4b').value;
  setResult('r4', `"${p2}" ${verificarSubconjunto(p1, p2)} de "${p1}"`);
}

function fn5() {
  const data = document.getElementById('d5').value;
  if (!data) return setResult('r5', 'Selecione uma data.');
  setResult('r5', `Dia da semana: ${diaDaSemana(data)}`);
}