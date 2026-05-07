const janela = document.getElementById("janela");
const titulo = document.getElementById("titulo");
let quebrada = false;

janela.addEventListener("mouseover", function () {
  if (!quebrada) {
    janela.src = "janelaaberta.jpg";
    titulo.innerText = "Janela Aberta";
  }
});

janela.addEventListener("mouseout", function () {
  if (!quebrada) {
    janela.src = "janelafechada.avif";
    titulo.innerText = "Janela Fechada";
  }
});

janela.addEventListener("click", function () {
  janela.src = "janelaquebrada.jpg";
  titulo.innerText = "Janela Quebrada";
  quebrada = true;
});
