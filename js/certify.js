

document.addEventListener('DOMContentLoaded', ()=>{
    certificaciones();
})

function certificaciones(){
    const contenedorMain = document.querySelector(".contain-certifaid");
    const childCountain = document.createElement("DIV");
    childCountain.classList.add('contenedor-hijo');
    let contador = 0;

    for(let i = 0; i < 2; i++){
        contador += 1;
        let cardIMG = document.createElement('IMG');
        cardIMG.src = `./build/img/certificaciones/${contador}.webp`;
        childCountain.appendChild(cardIMG);
        contenedorMain.appendChild(childCountain);
    }
    
}
