function tocaSom(idElement){
    document.querySelector(idElement).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

let contador = 0;

for(let i = 0 ; i < listaTeclas.length; i++){
    const tecla = listaTeclas[contador]

    const instrumento = tecla.classList[1];

    console.log(instrumento);

    tecla.onclick = function (){
        tocaSom(`#som_${instrumento}` );
        
    };
    contador = contador + 1;
    console.log(contador);
}