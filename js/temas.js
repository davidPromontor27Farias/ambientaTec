document.addEventListener('DOMContentLoaded', ()=>{
    crearTemas();
})
const infoTemas = [
    {
        img: './build/img/imagenesTemas/1.webp',
        tema: '¿Que es una huella ecologica?',
        link: './huellaEcologica.html'
    },
    {
        img: './build/img/imagenesTemas/2.webp',
        tema: '¿Como podemos reducir nuestros residuos plasticos?',
        link: './reduccionPlasticos.html'
    },
    {
        img: './build/img/imagenesTemas/3.webp',
        tema: '¿Por que optar por las energias renovables?',
        link: './energiasRenovables.html'
    },
    {
        img: './build/img/imagenesTemas/4.webp',
        tema: 'El por que del calentamiento global',
        link: './energiasRenovables.html'
    },
    {
        img: './build/img/imagenesTemas/5.webp',
        tema: '¿Como enseñar a as nuevas generaciones a cuidar del medio ambiente?',
        link: './energiasRenovables.html'
    },
]



function crearTemas(){

    const contenidoTemas = document.querySelector('.contenido-temas');
    

    
    infoTemas.forEach( elemento => {
        
        const temaDiv = document.createElement('DIV');
        temaDiv.style.backgroundImage = `url(${elemento.img})`;
        temaDiv.style.width = '100%';
        const parrafoDiv = document.createElement('p');
        const buttonLeer = document.createElement('A');
        buttonLeer.classList = 'button-leer';
        buttonLeer.textContent = 'Leer este tema';
        
        const divSombra = document.createElement('DIV');
        divSombra.className = 'sombra-contenido';
        
        buttonLeer.setAttribute("href", elemento.link);
        
        parrafoDiv.textContent = elemento.tema;
        temaDiv.appendChild(divSombra);
        temaDiv.appendChild(parrafoDiv);
        temaDiv.appendChild(buttonLeer);
        contenidoTemas.appendChild(temaDiv);
        
    })


    
}

