var numeroSecreto = parseInt(Math.random() * 11);
function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var resultado = document.getElementById("resultado");

  if (chute == numeroSecreto) {
    resultado.innerHTML = "Você acertou!";
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "O número deve estar entre o intervalo 0-10";
  } else {
    resultado.innerHTML = "Você errrou! Tente novamente";
  }
}