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


function iniciarCarrossel(trackId, buttonId) {
  const track = document.getElementById(trackId);
  const button = document.getElementById(buttonId);
  const items = Array.from(track.children);
  const itemWidth = items[0].offsetWidth + 10;
  const visibleItems = 3;

  // Clonar para loop infinito
  for (let i = 0; i < visibleItems; i++) {
    track.appendChild(items[i].cloneNode(true));
  }

  let index = 0;

  function moveNext() {
    index++;
    track.style.transition = 'transform 0.5s ease';
    track.style.transform = `translateX(-${index * itemWidth}px)`;

    if (index === items.length) {
      setTimeout(() => {
        track.style.transition = 'none';
        track.style.transform = 'translateX(0)';
        index = 0;
      }, 500);
    }
  }

  button.addEventListener('click', moveNext);
  setInterval(moveNext, 3000);
}

window.addEventListener('load', () => {
  iniciarCarrossel('carousel-feedback', 'nextFeedbackBtn');
  iniciarCarrossel('carousel-modelos', 'nextModelosBtn');
});









/*const track = document.getElementById('carousel-track');
const items = Array.from(track.children);
const itemWidth = items[0].offsetWidth + 10;
const visibleItems = 3;

// Clona os primeiros itens para o final (loop infinito)
for (let i = 0; i < visibleItems; i++) {
  track.appendChild(items[i].cloneNode(true));
}

let index = 0;

function moveNext() {
  index++;
  track.style.transition = 'transform 0.5s ease';
  track.style.transform = `translateX(-${index * itemWidth}px)`;

  // Quando chega no clone, volta pro original
  if (index === items.length) {
    setTimeout(() => {
      track.style.transition = 'none';
      track.style.transform = 'translateX(0)';
      index = 0;
    }, 500); // igual ao tempo da transição
  }
}

document.getElementById('nextBtn').addEventListener('click', moveNext);



  // Swipe em celular
let startX = 0;
track.addEventListener('touchstart', e => startX = e.touches[0].clientX);
track.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  const diff = endX - startX;
  if (Math.abs(diff) > 50) {
    if (diff < 0) moveNext();
    else movePrev();
  }
});


// Auto avanço
setInterval(moveNext, 3000);*/