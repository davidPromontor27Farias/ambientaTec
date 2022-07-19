
document.addEventListener('DOMContentLoaded', ()=>{
    crearSeccionAlumnos();
})


function crearSeccionAlumnos(){
    const arregloAlumnos = ['Doriana Heredia', 'David Promontor', 'Samuel Morales', 'Joari Gamaliel', 'Jairo Gabino', 'Karen Maryan', 'Bryan Chalate']
    contenedorPadre = document.querySelector('.contenido-alumnos');
    let contador = 0;
    for(let i = 0; i < arregloAlumnos.length; i++){
        contador += 1;
        let card = document.createElement('DIV');
        card.classList.add('animado');
        let imgAlumnos = document.createElement('IMG');
        imgAlumnos.src = `./build/img/alumnos/${contador}.webp`;

        card.appendChild(imgAlumnos);

        let nombreAlumno = document.createElement('H2');
        nombreAlumno.textContent = arregloAlumnos[i];

        card.appendChild(nombreAlumno);
        contenedorPadre.appendChild(card);


    }

}

