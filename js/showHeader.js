document.addEventListener("DOMContentLoaded", ()=>{

    showHeader();
});


function showHeader(){

    let pagesHeader = document.querySelector("body");

    if(pagesHeader.classList.contains('show-header')){
        const selectContain = document.querySelector('.contain-header');
        selectContain.innerHTML = `
            <div class="barra-desk contenedor">
                <div class="iconos-nav">
                
                    <a href="./index.html">
                        <img src="./build/img/impala 2.0.webp" alt="impala">
                    </a>
                    
                </div>
                <div class="contenedor-nav-desk">
                    <nav class="navegacion-desk">
                        <div class="iconos-link">
                            <a href="./temas.html">
                                <img src="./icons/icons8-temas-24.png" alt="temas">
                                <p>Calendario</p>
                            </a>
                        </div>
                        <div class="iconos-link">
                            <a href="./propositos.html">
                                <img src="./icons/icons8-megáfono-24.png" alt="proposito">
                                <p>Propositos</p>
                            </a>
                        </div>
                        <div class="iconos-link">
                            <a href="./creadores.html">
                                <img src="./icons/icons8-usuario-masculino.svg" alt="creadores">
                                <p>Creadores</p>
                            </a>
                        </div>
                        <div class="iconos-link">
                            <a href="./certificaciones.html">
                                <img src="./icons/icons8-marcapáginas.svg" alt="Certificaciones">
                                <p>Certificaciones</p>
                            </a>
                        </div>
                        <div class="iconos-link">
                            <a href="./proyectos.html">
                                <img src="./icons/icons8-proyecto-24.png" alt="proyectos">
                                <p>Temas</p>
                            </a>
                        </div>
                        <div class="iconos-link">
                            <a href="./mascota.html">
                                <img src="./icons/icons8-cat-head-24.png" alt="temas">
                                <p>Mascota</p>
                            </a>
                        </div>
        
                        
                    </nav>
                    <div class="icono-light">
                        <img src="./icons/icons8-do-not-disturb-ios-50.png" alt="mod">
                    </div>
                </div>
                
            
                <div class="menu-contenedor">
                    <img src="./icons/icons8-menu-rounded-50.png" alt="icono menu">
                </div>
                
            </div>

            <div class="navegacion-mobile">
                <nav class="nav-mobile">

                
                    <div class="iconos-link-mobile">
                        <div class="iconos-link">
                            <a href="./temas.html">
                                <img src="./icons/icons8-temas-24.png" alt="temas">
                                <p>Calendario</p>
                            </a>
                        </div>
                        <div class="iconos-link">
                            <a href="./propositos.html">
                                <img src="./icons/icons8-megáfono-24.png" alt="proposito">
                                <p>Propositos</p>
                            </a>
                        </div>
                        <div class="iconos-link">
                            <a href="./creadores.html">
                                <img src="./icons/icons8-usuario-masculino.svg" alt="creadores">
                                <p>Creadores</p>
                            </a>
                        </div>
                        <div class="iconos-link">
                            <a href="./certificaciones.html">
                                <img src="./icons/icons8-marcapáginas.svg" alt="Certificaciones">
                                <p>Certificaciones</p>
                            </a>
                        </div>
                        <div class="iconos-link">
                            <a href="./proyectos.html">
                                <img src="./icons/icons8-proyecto-24.png" alt="proyectos">
                                <p>Temas</p>
                            </a>
                        </div>
                        <div class="iconos-link">
                            <a href="./mascota.html">
                                <img src="./icons/icons8-cat-head-24.png" alt="temas">
                                <p>Mascota</p>
                            </a>
                        </div>

                    </div>
                </nav>
            </div>
 
        `
    }

    let hamburguesa = document.querySelector('.menu-contenedor img');
    let iconoLight = document.querySelector('.icono-light img');

    showNavMobile(hamburguesa);
    modDark(iconoLight);
    

}

function showNavMobile(el2){

    el2.addEventListener('click', ()=>{
        
        const navMobile = document.querySelector('.navegacion-mobile');
 
        if(navMobile.classList.contains('show-navMobile')){
            navMobile.classList.remove('show-navMobile');
            el2.src = './icons/icons8-menu-rounded-50.png';
            el2.classList.remove('squine');
  
           


        }
        else{
            navMobile.classList.add('show-navMobile');
            el2.src = './icons/icons8-eliminar.svg';
            el2.classList.add('squine');

        }
    })
}
function modDark(el3){
    

    el3.addEventListener('click', ()=>{
        document.body.classList.toggle('mod-dark-add');

        if(document.body.classList.contains('mod-dark-add')){
            localStorage.setItem('oscuro', 'true');
            el3.src = './icons/icons8-light-50.png'
            localStorage.setItem('modIcon', './icons/icons8-light-50.png')
    
        }
        else{
            localStorage.setItem('oscuro', 'false');
            el3.src = './icons/icons8-do-not-disturb-ios-50.png';
            localStorage.setItem('modIcon', './icons/icons8-do-not-disturb-ios-50.png');
        }

    })

    if(localStorage.getItem('oscuro') === 'true' && localStorage.getItem('modIcon') === './icons/icons8-light-50.png'){
        document.body.classList.add('mod-dark-add');
        el3.src = './icons/icons8-light-50.png';
    }
    else{
        document.body.classList.remove('mod-dark-add');
        el3.src = './icons/icons8-do-not-disturb-ios-50.png';
    }


        
    
}