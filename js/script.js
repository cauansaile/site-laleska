const imagemMudanca = document.getElementById('img-display').querySelector('img');
const imagemOriginal = imagemMudanca.src;

function mudarFoto(novaSrc) {
  imagemMudanca.classList.add('fade-out');

  // Troca a imagem após o fim do fade-out
  setTimeout(() => {
    imagemMudanca.src = novaSrc;
    imagemMudanca.classList.remove('fade-out');
  }, 300); // tempo menor que a transição para suavidade
}

function tirarFoto() {
  imagemMudanca.classList.add('fade-out');

  setTimeout(() => {
    imagemMudanca.src = imagemOriginal;
    imagemMudanca.classList.remove('fade-out');
  }, 300);
}
