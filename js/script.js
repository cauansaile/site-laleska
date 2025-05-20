document.getElementById('img-servicos').style.backgroundImage = `url('${penteado.jpeg}')`;

function mudarImagem(src) {
    document.getElementById('img-servicos').style.backgroundImage = `url('${src}')`;
}

function voltarImagem() {

    document.getElementById('img-servicos').style.backgroundImage = `url('${penteado.jpeg}')`;
    
}