const nome = document.querySelector(".nome").value;
const notas = Array.from(document.querySelectorAll(".nota")).map((e) =>
  parseFloat(e.value),
);

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const media = notas.reduce((n, m) => n + m, 0) / 4;
  alert(`Nome do aluno: ${nome}\nMédia do aluno: ${media}`);
});
