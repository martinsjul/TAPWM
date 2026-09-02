const TOTAL = 10;

let respostas = [];
let atual = 0;

const form = document.getElementById("survey-form");
const counter = document.getElementById("counter");
const progressFill = document.getElementById("progress-fill");
const errorMsg = document.getElementById("error-msg");
const btnLabel = document.getElementById("btn-label");
const formSection = document.getElementById("form-section");
const resultsSection = document.getElementById("results-section");
const resultsGrid = document.getElementById("results-grid");

function atualizarProgresso() {
  counter.textContent = `Participante ${atual + 1} de ${TOTAL}`;
  const pct = (atual / TOTAL) * 100;
  progressFill.style.width = pct + "%";

  if (atual === TOTAL - 1) {
    btnLabel.textContent = "Finalizar ✓";
  } else {
    btnLabel.textContent = "Próximo →";
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const idadeVal = document.getElementById("idade").value.trim();
  const sexoVal = document.querySelector('input[name="sexo"]:checked');
  const opiniaoVal = document.querySelector('input[name="opiniao"]:checked');

  if (!idadeVal || !sexoVal || !opiniaoVal) {
    errorMsg.classList.remove("hidden");
    return;
  }
  errorMsg.classList.add("hidden");

  respostas.push({
    idade: parseInt(idadeVal),
    sexo: sexoVal.value,
    opiniao: parseInt(opiniaoVal.value),
  });

  atual++;

  if (atual < TOTAL) {
    form.reset();
    atualizarProgresso();

    form.style.opacity = "0";
    setTimeout(() => {
      form.style.opacity = "1";
    }, 200);
  } else {
    mostrarResultados();
  }
});

function mostrarResultados() {
  const somaIdades = respostas.reduce((acc, r) => acc + r.idade, 0);
  const mediaIdade = (somaIdades / TOTAL).toFixed(1);

  const idades = respostas.map((r) => r.idade);
  const maisVelha = Math.max(...idades);
  const maisNova = Math.min(...idades);

  const qtdPessimo = respostas.filter((r) => r.opiniao === 1).length;

  const qtdOtimoBom = respostas.filter((r) => r.opiniao === 4 || r.opiniao === 3).length;
  const pctOtimoBom = ((qtdOtimoBom / TOTAL) * 100).toFixed(1);

  const mulheres = respostas.filter((r) => r.sexo === "feminino").length;
  const homens = respostas.filter((r) => r.sexo === "masculino").length;
  const outros = respostas.filter((r) => r.sexo === "outros").length;

  const cards = [
    { icon: "📊", label: "Média de Idade", value: `${mediaIdade} anos` },
    { icon: "👴", label: "Pessoa Mais Velha", value: `${maisVelha} anos` },
    { icon: "👶", label: "Pessoa Mais Nova", value: `${maisNova} anos` },
    { icon: "😤", label: "Responderam Péssimo", value: `${qtdPessimo} pessoa${qtdPessimo !== 1 ? "s" : ""}` },
    { icon: "🤩", label: "Ótimo ou Bom", value: `${pctOtimoBom}% (${qtdOtimoBom} de ${TOTAL})` },
    { icon: "♀", label: "Mulheres", value: `${mulheres}` },
    { icon: "♂", label: "Homens", value: `${homens}` },
    { icon: "⚧", label: "Outros", value: `${outros}` },
  ];

  resultsGrid.innerHTML = cards
    .map(
      (c) => `
    <div class="result-card">
      <div class="result-icon">${c.icon}</div>
      <div class="result-label">${c.label}</div>
      <div class="result-value">${c.value}</div>
    </div>
  `
    )
    .join("");

  formSection.classList.add("hidden");
  resultsSection.classList.remove("hidden");
  resultsSection.style.animation = "fadeSlide 0.5s ease forwards";
}

atualizarProgresso();