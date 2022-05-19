document.addEventListener("DOMContentLoaded", ()=>{

    insertFooter();
})



function insertFooter(){
    let pages = document.querySelector('body');

    if(pages.classList.contains("footer-show")){
        const contenidoFooter = document.createElement('DIV');
        contenidoFooter.classList.add("footer-section");

        contenidoFooter.innerHTML = `
            <div class="contenido-child-footer">
                <p>Instituto Tecnologico Superior de Cosamaloapan Veracruz</p>

                <div class="enlaces-footer">
                    <div>
                        <a href="temas.html">
                            <p>Calendario</p>
                        </a>
                        
                    </div>
                    <div>
                        <a href="propositos.html">
                            <p>Propositos</p>
                        </a>
                        
                    </div>
                    <div>
                        <a href="creadores.html">
                            <p>Creadores</p>
                        </a>
                        
                    </div>
                    <div>
                        <a href="certificaciones.html">
                            <p>Certificaciones</p>
                        </a>
                        
                    </div>
                    <div>
                        <a href="proyectos.html">
                            <p>Proyectos</p>
                        </a>
                        
                    </div>
                    <div>
                        <a href="mascota.html">
                            <p>Mascota</p>
                        </a>  
                    </div>
                </div>
            </div>
        `
        pages.appendChild(contenidoFooter);

    }
    return;
}