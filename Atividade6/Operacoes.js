function calcularOperacoes() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  let divResultados = document.getElementById("resultados");

  if (isNaN(n1) || isNaN(n2)) {
    divResultados.innerHTML =
      "<p style='color: red;'>Por favor, insira dois números válidos.</p>";
    return;
  }

  let soma = n1 + n2;
  let subtracao = n1 - n2;
  let produto = n1 * n2;

  let divisao = n2 !== 0 ? n1 / n2 : "Indefinida (divisão por zero)";
  let resto = n2 !== 0 ? n1 % n2 : "Indefinido";

  divResultados.innerHTML = `
<p><strong>Soma:</strong> ${soma}</p>
<p><strong>Subtração:</strong> ${subtracao}</p>
<p><strong>Produto:</strong> ${produto}</p>
<p><strong>Divisão:</strong> ${divisao}</p>
<p><strong>Resto da Divisão:</strong> ${resto}</p>
`;
}
