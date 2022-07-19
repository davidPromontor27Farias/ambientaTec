document.addEventListener('DOMContentLoaded', ()=>{
    crearTemas();
})



function crearTemas(){

    const contenidoTemas = document.querySelector('.contenido-temas');
    const infoTemas = [
        {
            img: './build/img/imagenesTemas/1.webp',
            tema: '¿Que es una huella ecologica?'
        },
        {
            img: './build/img/imagenesTemas/2.webp',
            tema: '¿Como podemos reducir nuestros residuos plasticos?'
        },
        {
            img: './build/img/imagenesTemas/3.webp',
            tema: '¿Por que optar por las energias renovables?'
        },
    ]

    
    infoTemas.forEach( elemento => {
        
        const temaDiv = document.createElement('DIV');
        temaDiv.style.backgroundImage = `url(${elemento.img})`;
        temaDiv.style.width = '100%';
        const parrafoDiv = document.createElement('p');
        const buttonLeer = document.createElement('BUTTON');
        buttonLeer.classList = 'button-leer';
        buttonLeer.textContent = 'Leer este tema'

        const divSombra = document.createElement('DIV');
        divSombra.className = 'sombra-contenido';
        
        parrafoDiv.textContent = elemento.tema;
        temaDiv.appendChild(divSombra);
        temaDiv.appendChild(parrafoDiv);
        temaDiv.appendChild(buttonLeer);
        contenidoTemas.appendChild(temaDiv);
        
    })

}