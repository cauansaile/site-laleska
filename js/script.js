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


document.getElementById("formContato").addEventListener("submit", function(event) {
event.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("numero").value;
  const servico = document.getElementById("servico-desejado").value;
  const endereco = document.getElementById("endereco").value;
  const data = document.getElementById("data").value;
  

  const texto = `Olá! Gostaria de realizar um agendamento com Laleska Palmeira %0A Nome: ${nome}%0A Telefone: ${telefone}%0A Serviço desejado: ${servico}%0A Endereço: ${endereco}%0A Data: ${data}`;

  const numero = "5571993322766"; // Altere para o número da escola com DDI + DDD
  const url = `https://wa.me/${numero}?text=${texto}`;

  window.open(url, "_blank");
});



