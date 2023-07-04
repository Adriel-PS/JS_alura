function tocaSom(idElement){
    const elemento = document.querySelector(idElement)

    if(elemento != null && elemento.localName === 'audio'){
            elemento.play();
        }else{
            console.log('objeto não encontrado ou não é um audio')
        }
}

const listaTeclas = document.querySelectorAll('.tecla');

for(let i = 0 ; i < listaTeclas.length; i++){
    
    const tecla = listaTeclas[i]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function (){
        tocaSom(idAudio);
    }
    tecla.onkeydown = function (evento) {
        if(evento.code == 'Enter' || evento.code == "Space"){
            tecla.classList.add('ativa')
        }
    }
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa')
    }
}
