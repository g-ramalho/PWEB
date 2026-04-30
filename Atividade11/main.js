function classificarIMC(imc) {
  if (imc < 18.5) {
    return { classificacao: "Magreza", grau: 0 };
  } else if (imc <= 24.9) {
    return { classificacao: "Normal", grau: 0 };
  } else if (imc <= 29.9) {
    return { classificacao: "Sobrepeso", grau: "I" };
  } else if (imc <= 39.9) {
    return { classificacao: "Obesidade", grau: "II" };
  } else {
    return { classificacao: "Obesidade Grave", grau: "III" };
  }
}

function calcularIMC() {
  var altura = parseFloat(document.getElementById("altura").value);
  var peso = parseFloat(document.getElementById("peso").value);
  var resultado = document.getElementById("resultado");

  if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
    resultado.innerHTML =
      "Por favor, informe valores válidos para altura e peso.";
    return;
  }

  var imc = peso / (altura * altura);
  var classificacao = classificarIMC(imc);

  resultado.innerHTML =
    "<p>IMC: " +
    imc.toFixed(2) +
    "</p>" +
    "<p>Classificação: " +
    classificacao.classificacao +
    "</p>" +
    "<p>Obesidade (Grau): " +
    classificacao.grau +
    "</p>";
}
