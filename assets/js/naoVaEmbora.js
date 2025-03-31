let alertBox = document.getElementById("alert");

// Função para mostrar o alerta quando o mouse se aproxima da borda
document.addEventListener("mousemove", function (e) {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Detecta se o mouse está perto da borda superior ou direita
  if (e.clientY < 20 || e.clientX > screenWidth - 20) {
    alertBox.style.display = "block";
    alertBox.style.opacity = 1;
  } else {
    alertBox.style.opacity = 0;
    setTimeout(function () {
      alertBox.style.display = "none";
    }, 3000); // Espera a animação de desaparecimento
  }
});
